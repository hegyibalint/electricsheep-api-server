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
      avatar: "/sheep-face.png",
      balance: 20,
      currency_symbol: "$$$",
    },
    update: {},
  });

  // The bot
  await prisma.player.upsert({
    where: {
      email: "gpt3davinci@electricsheep.chat",
    },
    create: {
      email: "gpt3davinci@electricsheep.chat",
      name: "GPT-3 DaVinci",
      avatar: "/openai-sheep-face.png",
      balance: 0,
      currency_symbol: "AI money",
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
