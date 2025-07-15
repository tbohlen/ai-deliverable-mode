import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";

/**
 * Chat API endpoint that streams responses from Anthropic Claude
 * Handles POST requests with messages and returns streaming text responses
 */
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Validate that messages exist and is an array
    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Stream the response from Anthropic Claude
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20241022"),
      messages,
      system: "You are a helpful AI assistant designed to help users create deliverables and prepare to present them. Be conversational, supportive, and focus on helping users understand the work they're creating with your assistance.",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}