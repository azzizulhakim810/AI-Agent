import { Router, type Request, type Response } from "express";
import { runAgent } from "./agent.js";

const router = Router();

router.post("/chat", async (req: Request, res: Response) => {
  const { message } = req.body;

  const reply = await runAgent(message);

  res.json({ reply });
});

export default router;
