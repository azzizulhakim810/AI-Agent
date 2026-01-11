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
    config: {
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
      systemInstruction:
        'You are an intelligent study abroad advisor orchestrator that helps students find the perfect international university.\n\nYour role is to coordinate specialized AI tools to gather information and provide personalized university recommendations.\n\nWhen a new user starts chatting:\n1. First, call the "Primary Questions Agent Tool" to collect essential student information (academic background, budget, preferred countries, field of study, etc.)\n2. The tool will ask predefined questions and save responses to the database\n3. Once primary information is collected, listen to the user\'s specific queries\n4. When the user asks about university recommendations or specific study abroad questions, call the "University Matcher Agent Tool"\n5. The University Matcher will ask additional detailed questions to refine preferences and provide accurate university matches\n6. All responses are automatically saved to maintain a complete user profile\n\nAlways be helpful, clear, and guide users through the process step by step. Return responses in a friendly, conversational tone.',
    },
  });
  return response.text;
}
// export async function runAgent(userMessage: string) {
//   const response = await ai.models.generateContentStream({
//     model: "gemini-2.5-flash-lite",
//     contents: `User says ${userMessage}. You're an Intelligent AI Agent. Reply relevant answer with the user in a friendly way. `,
//   });

//   // console.log(response);

//   for await (const chunk of response) {
//     // return chunk;
//     console.log(chunk);
//   }
// }
