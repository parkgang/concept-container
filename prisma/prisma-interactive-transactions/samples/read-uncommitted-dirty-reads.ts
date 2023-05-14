import { Prisma } from "@prisma/client";
import { clearDate, prismaClient, seedDate, sleep } from "../util";

async function main() {
  const users = await seedDate();

  setTimeout(async () => {
    try {
      await prismaClient.$transaction(async (tx) => {
        console.log("(트랜잭션 2) 시작");

        // 기본적으로 Prisma는 prismaClient.user.update() 와 같이 하는 경우 하나의 트랜잭션이 끝난 것으로 처리하기 때문에 tx 문맥으로 처리해야 원하는 시점에 Commit을 컨트롤 할 수 있어 기대하는 결과를 볼 수 있습니다.
        await tx.user.update({
          where: {
            id: users[0].id,
          },
          data: {
            arg: 999,
          },
        });
        console.log("(트랜잭션 2) 사용자 업데이트 완료");

        console.log("(트랜잭션 2) 다른 트랜잭션 수행 위하여 대기");
        await sleep(3000);
        console.log("(트랜잭션 2) 대기 완료");
        // `READ UNCOMMITTED` 에서 많이 등장하는 예제로 Rollback 시나리오를 위해서 에러를 발생하는 것인데 해당 코드를 주석처리하고 Rollback이 발생하지 않는 경우 어떻게 동작하는지도 볼 수 있습니다.
        throw new Error("(트랜잭션 2) 의도적으로 에러발생하여 Rollback 발생");
      });
    } catch (e) {
      console.error(e.message);
    } finally {
      console.log("(트랜잭션 2) 종료");
    }
  }, 100);

  await prismaClient.$transaction(
    async (tx) => {
      console.log("(트랜잭션 1) 시작");

      const userFirstQuery = await tx.user.findMany();

      console.log("(트랜잭션 1) 다른 트랜잭션 수행 위하여 대기");
      await sleep(1000);
      console.log("(트랜잭션 1) 대기 완료");

      console.log("(트랜잭션 1) 두번째 사용자 전체 조회 시작");
      // `READ UNCOMMITTED` 조회하려는 데이터가 다른 트랜잭션에서 변경 여부와 관계 없이 바로 조회되는 것을 볼 수 있습니다.
      const userSecondQuery = await tx.user.findMany();
      console.log("(트랜잭션 1) 두번째 사용자 전체 조회 완료");

      console.log("(트랜잭션 1) 종료", {
        "첫번째 사용자 전체 조회": userFirstQuery,
        // 트랜잭션2 가 롤백됨에 따라 업데이트 된 데이터가 조회되지 않는 것을 볼 수 있습니다.
        "두번째 사용자 전체 조회: 조회하는 부분의 트랜잭션이 종료되지 않았음에도 조회되어 Dirty reads 발생":
          userSecondQuery,
      });
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadUncommitted,
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
