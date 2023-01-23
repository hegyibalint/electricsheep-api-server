import { RequestHandler } from "express";

export const meGet: RequestHandler = (req, res) => {
  res.json({
    name: "Alice",
    avatar: "/sheep-face.png",
    email: "alice@electricsheep.com",
    last_login: "A moment ago",
    balance: "20",
    currency_symbol: "$",
    games_left: 10,
    rank: 33,
    games_played_against_human: 1000,
    games_played_against_robot: 2000,
    success_guess_robot: 1500,
    success_guess_human: 300,
    success_confuse_human: 100,
  });
};
