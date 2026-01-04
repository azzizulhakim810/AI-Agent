import { GoogleGenAI } from "@google/genai";
// import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

// const ai = new GoogleGenAI({});

// export async function runAgent(userMessage: string) {
//   // return `Agent: ${userMessage}`;
//   return `Agent: ${userMessage}`;
// }

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
// const model = genAI.getGenerativeModel({model: "gemini-3-pro-preview"})

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

export async function runAgent(userMessage: string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: `User says ${userMessage}. You're an Intelligent AI Agent. Reply relevant answer with the user in a friendly way. `,
  });
  return response.text;
}
// export async function runAgent(userMessage: string) {
//   const response = await ai.models.generateContentStream({
//     model: "gemini-2.5-flash-lite",
//     contents: `User says ${userMessage}. You're an Intelligent AI Agent. Reply relevant answer with the user in a friendly way. `,
//   });

//   for await (const chunk of response) {
//     return chunk;
//     // console.log(chunk);
//   }
// }
