import { RequestHandler } from "express";

export const chatGet: RequestHandler = (req, res) => {
  res.json({
    messages: [
      {
        content: "ciao",
        author: "opponent",
      },
      {
        content: "ciao a te, come stai?",
        author: "player",
      },
      {
        content: "tutto bene, grazie.",
        author: "opponent",
      },
    ],
  });
};
