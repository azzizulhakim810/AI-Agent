import type { Message } from "../agent/types.js";

export const callLLM = async (
  systemPromt: string,
  // message: { role: string; content: string }[]
  message: Message[]
) => {
  
  // TEMP: mock response
  // Replace with Gemini REST call later

  return "LLM response placeholder based on context";
};
