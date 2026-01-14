import axios from "axios";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.LLM_MODEL;

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

export const callGemini = async (systemPrompt: string, userMessage: string) => {
  if (!API_KEY) {
    throw new Error("GEMINI_API_KEY is missing");
  }

  const response = await axios.post(
    GEMINI_URL,
    {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt} \n\n
              User: ${userMessage}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const candidates = response.data.candidates;

  if (!candidates || candidates.length === 0) {
    throw new Error("No response from Gemini");
  }

  return candidates[0].content.parts[0].text;
};
