import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  const usersDate: Prisma.UserCreateInput[] = [
    { arg: 18 },
    { arg: 20 },
    { arg: 30 },
    { arg: 40 },
    { arg: 50 },
  ];
  const users = await prisma.$transaction(
    usersDate.map((user) => prisma.user.create({ data: user }))
  );
  console.log("기초 사용자 생성 완료:", users);

  // 비동기적으로 사용자 생성 쿼리: 비관적 락(Pessimistic Locking) 테스트
  setTimeout(async () => {
    console.log("비동기적으로 사용자 생성 시작 🪄");

    const user = await prisma.user.create({
      data: { arg: 999 },
    });

    console.log("비동기 섹션에서 사용자 생성 완료 ✅:", user);
  });

  // 비관적 락(Pessimistic Locking) 으로 사용자 나이 집계와 사용자 수 조회
  await prisma.$transaction(async (tx) => {
    console.log("비관적 락 시작 🪄");
    // 의도적으로 2초 기다려봄
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });

    const _20세_이하의_사용자_나이_집계 = await tx.user.aggregate({
      _sum: { arg: true },
      where: { arg: { lte: 20 } },
    });
    const _20세_초과의_사용자_나이_집계 = await tx.user.aggregate({
      _sum: { arg: true },
      where: { arg: { gt: 20 } },
    });
    const usersCount = await tx.user.count();

    console.log("비관적 락 종료 ✅:", {
      "20세 이하의 사용자 나이 집계": _20세_이하의_사용자_나이_집계,
      "20세 초과의 사용자 나이 집계": _20세_초과의_사용자_나이_집계,
      "총 사용자 수": usersCount,
    });
  });

  // 데이터 정리
  const deleteUser = await prisma.user.deleteMany();
  const usersCount = await prisma.user.count();
  console.log(deleteUser && usersCount === 0 && "사용자 삭제 완료");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
