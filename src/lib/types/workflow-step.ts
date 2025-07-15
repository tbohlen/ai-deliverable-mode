/**
 * TypeScript interfaces for Workflow Steps.
 */

export interface WorkflowStep {
  order: number;
  title: string;
  description: string;
  aiPrompt: string;
}