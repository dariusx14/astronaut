import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "system", content: "You are an astronaut's AI assistant." }, { role: "user", content: message }],
  });

  res.json({ reply: response.data.choices[0].message?.content });
}
