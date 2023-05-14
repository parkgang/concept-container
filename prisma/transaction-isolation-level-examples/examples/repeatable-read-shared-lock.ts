import { Prisma } from "@prisma/client";
import { clearDate, prismaClient, seedDate, sleep } from "../util";

async function main() {
  const users = await seedDate();

  setTimeout(async () => {
    console.log("(트랜잭션 2) 시작");

    // `REPEATABLE READ` 이기 때문에 `REPEATABLE READ` 트랜잭션 섹션에서 읽은 데이터는 수정이 안되는 것을 볼 수 있습니다.
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

      const userFind = await tx.user.findFirst({
        where: {
          id: users[0].id,
        },
      });

      console.log("(트랜잭션 1) 다른 트랜잭션 수행 위하여 대기");
      await sleep(1000);
      console.log("(트랜잭션 1) 대기 완료");

      console.log("(트랜잭션 1) 종료", {
        "사용자 조회": userFind,
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
