import { MessageSquare, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Empty state component displayed when chat interface has no messages
 * Shows welcome message and helpful hints to get users started
 * Uses shadcn/ui Card and Typography components for consistent styling
 */
export function ChatInterfaceEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 px-4 text-center">
      <div className="mb-6">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-muted rounded-full">
          <MessageSquare className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">Start a conversation</h3>
        <p className="text-muted-foreground max-w-md">
          Chat with AI to create deliverables, then get help preparing to present them to your stakeholders.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              Create with AI
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">
              Get help writing reports, presentations, or any deliverable
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-sm">
              <MessageSquare className="w-4 h-4 text-primary mr-2" />
              Prepare to present
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">
              Understand your work and get ready to present it confidently
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6 text-sm text-muted-foreground">
        Type your message below to get started
      </div>
    </div>
  );
}