import { Bot } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Message object from Vercel AI SDK useChat hook
 */
interface UIMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'data';
  createdAt?: Date;
  content: string;
}

/**
 * AI Message component that displays messages from the AI assistant
 * Uses shadcn/ui Avatar and Card components for consistent styling
 */
interface AIMessageProps {
  /** Message object from useChat hook */
  message: UIMessage;
}

export function AIMessage({ message }: AIMessageProps) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <Avatar className="w-8 h-8 shrink-0">
        <AvatarFallback className="bg-primary text-primary-foreground">
          <Bot className="w-4 h-4" />
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 max-w-4xl">
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="text-sm text-foreground whitespace-pre-wrap">
              {message.content}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}