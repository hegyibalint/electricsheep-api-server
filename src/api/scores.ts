import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

export const scoresGet: RequestHandler = (req, res) => {
  res.json({
    human: {
      name: "Alice",
      score: 88,
    },
    model: {
      name: "ChatGPT",
      score: 91,
    },
  });
};
