"use client";

import { useChat } from "@ai-sdk/react";
import { useCallback, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { ChatInterfaceEmptyState } from "./chat-interface-empty-state";
import { ChatInputBar } from "./chat-input-bar";
import { ChatMessageDisplayer } from "./chat-message-displayer";
import { useClientStore } from "@/lib/store/client-store";
import { createToolHandlers } from "@/lib/utils/tool-handlers";
import { DeliverableToolCall } from "@/lib/tools/deliverable-tools";
import { StakeholderToolCall } from "@/lib/tools/stakeholder-tools";
import { WorkflowStepToolCall } from "@/lib/tools/workflow-step-tools";

/**
 * Main chat interface component that handles the chat conversation flow
 * Uses useChat hook for AI chat functionality and manages message state
 */
export function ChatInterface() {
  const { 
    setSessionId, 
    setDeliverable, 
    setStakeholders,
    setGoals,
    setQuestions,
    setWorkflowStep
  } = useClientStore();
  
  // Generate a stable sessionId for this chat session
  const sessionId = useMemo(() => uuidv4(), []);
  
  // Set the sessionId in the store
  useEffect(() => {
    setSessionId(sessionId);
  }, [setSessionId]);

  // Create extensible tool handlers
  const toolHandlers = useMemo(() => ({
    ...createToolHandlers({ 
      setDeliverable, 
      setStakeholders,
      setGoals,
      setQuestions,
      setWorkflowStep
    }),
  }), [setDeliverable, setStakeholders, setGoals, setQuestions, setWorkflowStep]);

  const handleToolCall = useCallback(({toolCall}: {toolCall: DeliverableToolCall | StakeholderToolCall | WorkflowStepToolCall}) => {
    const handler = toolHandlers[toolCall.toolName];
    if (handler) {
      handler(toolCall);
    }
  }, [toolHandlers]);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      sessionId,
    },
    onToolCall: handleToolCall,
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