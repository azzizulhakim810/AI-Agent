import { Router, type Request, type Response } from "express";
import { runAgent } from "./agent.js";
import type { AgentContext } from "./agent/types.js";
import { runOrchestrator } from "./agent/orchestrator.js";

const router = Router();

// Temporary in-memory context
const context: AgentContext = {
  message: [
    {
      role: "system",
      content: "You're Setu AI",
    },
  ],
  hasPrimaryInfo: false,
};

router.post("/chat", async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const reply = await runOrchestrator(message);
    // const reply = await runOrchestrator(message, context);

    res.json({ reply });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "LLM call failed" });
  }
});

export default router;
