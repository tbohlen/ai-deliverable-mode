import { z } from 'zod';
import { tool, ToolCallUnion, ToolResultUnion } from 'ai';
import { DeliverableManager } from '../deliverable-manager';
import { workflowSteps } from '../workflow-steps';

export function createWorkflowStepTools(sessionId: string) {
  const tools = {
    setWorkflowStep: tool({
      description: 'Set the current workflow step for the session',
      parameters: z.object({
        stepOrder: z.number().describe('The order number of the workflow step (1-7)'),
      }),
      execute: async ({ stepOrder }) => {
        try {
          const deliverableManager = DeliverableManager.getInstance();
          deliverableManager.setValue(sessionId, 'workflowStep', stepOrder);
          
          const workflowStep = workflowSteps.find(step => step.order === stepOrder);
          
          return {
            success: true,
            message: 'Workflow step updated successfully',
            workflowStep,
          };
        } catch (error) {
          return {
            success: false,
            message: `Failed to set workflow step: ${error}`,
          };
        }
      },
    }),

    getWorkflowStep: tool({
      description: 'Get the current workflow step for the session',
      parameters: z.object({}),
      execute: async () => {
        try {
          const deliverableManager = DeliverableManager.getInstance();
          const stepOrder = deliverableManager.getValue(sessionId, 'workflowStep');
          const currentStepOrder = stepOrder || 1; // Default to step 1 if not set
          
          const workflowStep = workflowSteps.find(step => step.order === currentStepOrder);
          
          return {
            success: true,
            message: workflowStep ? 'Workflow step retrieved successfully' : 'No workflow step found',
            workflowStep,
          };
        } catch (error) {
          return {
            success: false,
            message: `Failed to get workflow step: ${error}`,
          };
        }
      },
    }),
  };
  
  return tools;
}

// Export proper types for the tools
export type WorkflowStepTools = ReturnType<typeof createWorkflowStepTools>;
export type WorkflowStepToolCall = ToolCallUnion<WorkflowStepTools>;
export type WorkflowStepToolResult = ToolResultUnion<WorkflowStepTools>;