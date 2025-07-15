import { HeaderBar } from "@/components/header-bar";

/**
 * Home page component that displays the main chat interface
 * Currently shows a placeholder with the header bar integration
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderBar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to AI Deliverable Mode</h2>
          <p className="text-muted-foreground mb-8">
            Chat with AI to create deliverables, then prepare to present them with confidence.
          </p>
          <div className="text-sm text-muted-foreground">
            Chat interface coming soon...
          </div>
        </div>
      </main>
    </div>
  );
}
