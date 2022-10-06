import { PrismaClient as PrismaClient1 } from "./prisma/generated/client1";
import { PrismaClient as PrismaClient2 } from "./prisma/generated/client2";

const client1 = new PrismaClient1();
const client2 = new PrismaClient2();

async function main() {
  const user = await client1.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);

  const post = await client2.post.create({
    data: {
      authorId: 1,
      title: "hi",
    },
  });
  console.log(post);
}

main()
  .then(async () => {
    await client1.$disconnect();
    await client2.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client1.$disconnect();
    await client2.$disconnect();
    process.exit(1);
  });
