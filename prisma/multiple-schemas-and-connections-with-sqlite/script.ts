import { PrismaClient as PrismaClientDb1 } from "./prisma/db1/client";
import { PrismaClient as PrismaClientDb2 } from "./prisma/db2/client";

const db1Client = new PrismaClientDb1();
const db2Client = new PrismaClientDb2();

async function main() {
  const user = await db1Client.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
  console.log(user);

  const post = await db2Client.post.create({
    data: {
      authorId: 1,
      title: "hi",
    },
  });
  console.log(post);
}

main()
  .then(async () => {
    await db1Client.$disconnect();
    await db2Client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db1Client.$disconnect();
    await db2Client.$disconnect();
    process.exit(1);
  });
