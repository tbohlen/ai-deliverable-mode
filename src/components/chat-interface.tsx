"use client";

import { useChat } from "@ai-sdk/react";
import { ChatInterfaceEmptyState } from "./chat-interface-empty-state";
import { ChatInputBar } from "./chat-input-bar";
import { ChatMessageDisplayer } from "./chat-message-displayer";

/**
 * Main chat interface component that handles the chat conversation flow
 * Uses useChat hook for AI chat functionality and manages message state
 */
export function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto min-h-0">
        {messages.length === 0 ? (
          <ChatInterfaceEmptyState />
        ) : (
          <div className="p-4">
            {messages.map((message) => (
              <ChatMessageDisplayer key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>
      <div className="p-4 border-t bg-background shrink-0">
        <ChatInputBar
          value={input}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          disabled={isLoading}
          placeholder="Type your message..."
        />
      </div>
    </div>
  );
}