import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

export const meGet: RequestHandler = async (req, res) => {
  const user =  await prisma.player.findUnique({
    where: {
      email: "test@example.com",
    },
    include: {
      games: true,
      guesses_made: true,
      guesses_received: true
    },
  });

  console.log(user);
  res.json(user);
};
