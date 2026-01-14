import { primaryQuestionsTool, universityMatcherTool } from "./tools.js";
import type { AgentContext } from "./types.js";

const SYSTEM_PROMPT = `
You are Setu, an Intelligent study abroad advisor.
Your job is to guide students step by step and call tools when needed.
`;

// Receive & Run Main Orchestrator
export const runOrchestrator = async (
  userMessage: string,
  context: AgentContext
) => {
  context.message.push({
    role: "user",
    content: userMessage,
  });

  // Decide what to do
  if (!context.hasPrimaryInfo) {
    // Call primary tool first
    const toolOutput = await primaryQuestionsTool();

    context.message.push({
      role: "assistant",
      content: toolOutput,
    });

    return toolOutput;
  }

  // If primary info exists, call matcher
  const matcherOutput = await universityMatcherTool();

  context.message.push({
    role: "assistant",
    content: matcherOutput,
  });

  return matcherOutput;
};
