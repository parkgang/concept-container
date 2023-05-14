import { Prisma } from "@prisma/client";
import { clearDate, prismaClient, seedDate, sleep } from "../util";

async function main() {
  const users = await seedDate();

  setTimeout(async () => {
    console.log("(트랜잭션 2) 시작");

    await prismaClient.user.update({
      where: {
        id: users[0].id,
      },
      data: {
        arg: 999,
      },
    });
    console.log("(트랜잭션 2) 사용자 업데이트 완료");

    console.log("(트랜잭션 2) 종료");
  }, 100);

  await prismaClient.$transaction(
    async (tx) => {
      console.log("(트랜잭션 1) 시작");

      const userFirstQuery = await tx.user.findMany();

      console.log("(트랜잭션 1) 다른 트랜잭션 수행 위하여 대기");
      await sleep(1000);
      console.log("(트랜잭션 1) 대기 완료");

      // 트랜잭션1 에서 업데이트한 데이터가 반영되어 조회되는 것을 볼 수 있습니다.
      const userSecondQuery = await tx.user.findMany();

      console.log("(트랜잭션 1) 종료", {
        "첫번째 사용자 전체 조회": userFirstQuery,
        "두번째 사용자 전체 조회 Non-repeatable Reads 발생": userSecondQuery,
      });
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
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
