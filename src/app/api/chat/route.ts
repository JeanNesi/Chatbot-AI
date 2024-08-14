import { CoreMessage, streamText } from "ai";
import { ollama } from "ollama-ai-provider";

export async function POST(messages: CoreMessage[]) {
  const response = await streamText({
    model: ollama("gemma2"),
    messages,
  });

  return response.toAIStreamResponse();
}
