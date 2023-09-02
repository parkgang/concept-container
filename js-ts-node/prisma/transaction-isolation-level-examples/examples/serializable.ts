import { Prisma } from "@prisma/client";
import { clearDate, prismaClient, seedDate, sleep } from "../util";

async function main() {
  await seedDate();

  setTimeout(async () => {
    console.log("(트랜잭션 2) 시작");

    // `SERIALIZABLE` 이기 때문에 `트랜잭션 1` 에서 조회된 데이터는 해당 트랜잭션이 끝나기 전까지 데이터 생성이 안되는 것을 볼 수 있습니다. 그렇기 때문에 `Phantom reads` 가 발생하지 않습니다.
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

      console.log("(트랜잭션 1) 종료", {
        // 다른 트랜잭션에서 생성된 데이터가 조회되지 않아 `Phantom reads` 가 발생하지 않는 것을 볼 수 있습니다.
        "사용자 조회": userFirstQuery,
      });
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
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
