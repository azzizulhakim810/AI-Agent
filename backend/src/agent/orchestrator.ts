import { callGemini } from "../llm/geminiRaw.js";
import { callLLM } from "../llm/geminiSDK.js";
import { DECISION_PROMPT } from "./decisionPrompt.js";
import { SYSTEM_PROMPT } from "./systemPrompt.js";
import { askPrimaryQuestions, recommendUniversities } from "./tools.js";

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
//     const toolOutput = await askPrimaryQuestions();

//     context.message.push({
//       role: "assistant",
//       content: toolOutput,
//     });

//     return toolOutput;
//   }

//   // If primary info exists, call matcher
//   const matcherOutput = await recommendUniversities();

//   context.message.push({
//     role: "assistant",
//     content: matcherOutput,
//   });

//   return matcherOutput;
// };

export const runOrchestrator = async (userMessage: string) => {
  // Ask Gemini What to do
  const response = await callLLM(DECISION_PROMPT, userMessage);

  let action = "RESPOND_NORMALLY";

  try {
    action = JSON.parse(response).action;
  } catch (error) {
    action = "RESPOND_NORMALLY";
  }

  // Execute Action
  if (action === "ASK_PRIMARY_QUESTIONS") {
    return await askPrimaryQuestions();
  } else if (action === "RECOMMEND_UNIVERSITIES") {
    return await recommendUniversities();
  } else {
    return await callGemini(SYSTEM_PROMPT, userMessage);
  }
};
