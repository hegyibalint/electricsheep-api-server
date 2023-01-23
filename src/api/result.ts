import { RequestHandler } from "express";

export const resultGet: RequestHandler = (req, res) => {
  res.json({
    opponent: "human",
    rank: 33,
  });
};
