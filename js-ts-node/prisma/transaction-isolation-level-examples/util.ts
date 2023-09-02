import { Prisma, PrismaClient } from "@prisma/client";

/** 프로젝트에서 사용되는 Prisma Client 입니다. */
export const prismaClient = new PrismaClient({
  // log: ["query", "info", "warn", "error"],
});

/** 테스트를 위한 시드 데이터를 생성해줍니다. */
export const seedDate = async () => {
  const usersDate: Prisma.UserCreateInput[] = [
    { arg: 18 },
    { arg: 20 },
    { arg: 30 },
    { arg: 40 },
    { arg: 50 },
  ];
  const users = await prismaClient.$transaction(
    usersDate.map((user) => prismaClient.user.create({ data: user }))
  );
  console.log("사용자 시드 데이터 생성 완료", users);

  return users;
};

/** 테스트 완료 후 생성된 데이터를 정리해줍니다. */
export const clearDate = async () => {
  await prismaClient.user.deleteMany();
  console.log("모든 사용자 삭제 완료");
};

/** 일정 시간을 기다립니다. 주로 트랜잭션들의 타이밍을 조절하기 위해서 사용됩니다. */
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, ms);
  });
};
