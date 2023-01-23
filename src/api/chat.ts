import { RequestHandler } from "express";

export const chatGet: RequestHandler = (req, res) => {
  res.json({
    messages: [
      {
        message: "ciao",
        author: "opponent",
      },
      {
        message: "ciao a te, come stai?",
        author: "player",
      },
      {
        message: "tutto bene, grazie.",
        author: "opponent",
      },
    ],
  });
};
