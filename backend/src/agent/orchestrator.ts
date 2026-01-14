import { callLLM } from "../llm/geminiSDK.js";
import { SYSTEM_PROMPT } from "./systemPrompt.js";
import { primaryQuestionsTool, universityMatcherTool } from "./tools.js";
import type { AgentContext } from "./types.js";

// Receive & Run Main Orchestrator
// export const runOrchestrator = async (
//   userMessage: string,
//   context: AgentContext
// ) => {
//   context.message.push({
//     role: "user",
//     content: userMessage,
//   });

//   // Decide what to do
//   if (!context.hasPrimaryInfo) {
//     // Call primary tool first
//     const toolOutput = await primaryQuestionsTool();

//     context.message.push({
//       role: "assistant",
//       content: toolOutput,
//     });

//     return toolOutput;
//   }

//   // If primary info exists, call matcher
//   const matcherOutput = await universityMatcherTool();

//   context.message.push({
//     role: "assistant",
//     content: matcherOutput,
//   });

//   return matcherOutput;
// };

export const runOrchestrator = async (userMessage: string) => {
  const response = await callLLM(SYSTEM_PROMPT, userMessage);
  return response;
};
