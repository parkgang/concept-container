import { Prisma } from "@prisma/client";
import { clearDate, prismaClient, seedDate, sleep } from "../util";

async function main() {
  await seedDate();

  setTimeout(async () => {
    console.log("(트랜잭션 2) 시작");

    // `REPEATABLE READ` 이기 때문에 `트랜잭션 1` 에서 읽은 데이터에 대해서도 생성이 되는 것을 볼 수 있으며 해당 데이터는 `Phantom reads` 를 유발할 것 입니다.
    console.log("(트랜잭션 2) 사용자 생성 시도");
    await prismaClient.user.create({
      data: {
        arg: 999,
      },
    });
    console.log("(트랜잭션 2) 사용자 생성 완료");

    console.log("(트랜잭션 2) 종료");
  }, 100);

  await prismaClient.$transaction(
    async (tx) => {
      console.log("(트랜잭션 1) 시작");

      const userFirstQuery = await tx.user.findMany();

      console.log("(트랜잭션 1) 다른 트랜잭션 수행 위하여 대기");
      await sleep(1000);
      console.log("(트랜잭션 1) 대기 완료");

      const userPhantomRead = await tx.user.findMany();

      console.log("(트랜잭션 1) 종료", {
        "트랜잭션 시작하자 마자 데이터 조회": userFirstQuery,
        "다른 트랜잭션에서 데이터가 생성되어 PhantomRead 발생": userPhantomRead,
      });
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
    }
  );

  await clearDate();
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
