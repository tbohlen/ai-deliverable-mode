import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Deliverable as DeliverableType } from "@/lib/types/deliverable";

/**
 * Deliverable component for displaying markdown deliverable content
 * Uses react-markdown for rendering with shadcn Card for structure
 */
interface DeliverableProps {
  deliverable: DeliverableType;
}

export function Deliverable({ deliverable }: DeliverableProps) {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>{deliverable.title}</CardTitle>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date(deliverable.updatedAt).toLocaleDateString()}
        </div>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-xl font-bold mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-semibold mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-medium mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-3 text-sm leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-3 text-sm space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-3 text-sm space-y-1">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-sm">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-muted pl-4 italic mb-3 text-sm">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {deliverable.content}
          </ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}