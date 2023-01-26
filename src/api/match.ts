import { RequestHandler } from "express";

function delay(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
}

export const matchGet: RequestHandler = async (req, res) => {
    console.log("Waiting...")
    await delay(4000);
    console.log("Waited")
    return res.json({});
};
