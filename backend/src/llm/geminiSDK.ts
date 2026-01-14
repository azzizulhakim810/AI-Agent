import { GoogleGenAI } from "@google/genai";
import type { Message } from "../agent/types.js";
import "dotenv/config";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

export const callLLM = async (
  systemPromt: string,
  // message: { role: string; content: string }[]
  // message: Message[]
  userMessage: string
) => {
  const response = await ai.models.generateContent({
    model: `${process.env.LLM_MODEL}`,
    contents: userMessage,
    config: {
      systemInstruction: systemPromt,
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    },
  });

  if (!response.text) {
    throw new Error("Empty response from Gemini");
  }
  return response.text;
};
