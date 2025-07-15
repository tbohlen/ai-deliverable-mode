import { HeaderBar } from "@/components/header-bar";
import { ChatInterface } from "@/components/chat-interface";

/**
 * Home page component that displays the main chat interface
 * Shows header bar and chat interface with empty state
 */
export default function Home() {
  return (
    <div className="h-screen bg-background flex flex-col">
      <HeaderBar />
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col min-h-0">
        <div className="flex-1 min-h-0">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}
