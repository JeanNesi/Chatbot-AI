import { CoreMessage, streamText } from "ai";
import { ollama } from "ollama-ai-provider";

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log(messages);

  const response = await streamText({
    model: ollama("gemma2"),
    messages,
  });

  return response.toAIStreamResponse();
}
