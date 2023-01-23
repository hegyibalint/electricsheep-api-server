import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main() {
  await prisma.player.upsert({
    where: {
      email: "test@example.com",
    },
    create: {
      email: "test@example.com",
      name: "Test User",
    },
    update: {},
  });
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
