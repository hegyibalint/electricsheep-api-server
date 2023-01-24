import { PrismaClient } from "@prisma/client";
import express from "express";

import { chatGet } from "./api/chat";
import { meGet } from "./api/me";
import { resultGet } from "./api/result";
import { scoresGet } from "./api/scores";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

app.get("/api/chat", chatGet);
app.get("/api/me", meGet);
app.get("/api/result", resultGet);
app.get("/api/scores", scoresGet);
