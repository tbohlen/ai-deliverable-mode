import { z } from 'zod';
import { tool, ToolCallUnion, ToolResultUnion } from 'ai';
import { DeliverableManager } from '../deliverable-manager';

export function createDeliverableTools(sessionId: string) {
  const tools = {
    setDeliverable: tool({
      description: 'Set or update the deliverable for the current session',
      parameters: z.object({
        title: z.string().describe('The title of the deliverable'),
        content: z.string().describe('The markdown content of the deliverable'),
      }),
      execute: async ({ title, content }) => {
        try {
          const deliverableManager = DeliverableManager.getInstance();
          const deliverable = deliverableManager.setDeliverable(sessionId, title, content);
          return {
            success: true,
            message: 'Deliverable updated successfully',
            deliverable,
          };
        } catch (error) {
          return {
            success: false,
            message: `Failed to set deliverable: ${error}`,
          };
        }
      },
    }),

    getDeliverable: tool({
      description: 'Get the current deliverable for the session',
      parameters: z.object({}),
      execute: async () => {
        try {
          const deliverableManager = DeliverableManager.getInstance();
          const deliverable = deliverableManager.getDeliverable(sessionId);
          if (deliverable) {
            return {
              success: true,
              message: 'Deliverable retrieved successfully',
              deliverable,
            };
          } else {
            return {
              success: true,
              message: 'No deliverable found for this session',
            };
          }
        } catch (error) {
          return {
            success: false,
            message: `Failed to get deliverable: ${error}`,
          };
        }
      },
    }),

    turnOnDeliverableMode: tool({
      description: 'Enable deliverable mode for the current session',
      parameters: z.object({}),
      execute: async () => {
        return {
          success: true,
          message: 'Deliverable mode enabled',
        };
      },
    }),
  };
  
  return tools;
}

// Export proper types for the tools
export type DeliverableTools = ReturnType<typeof createDeliverableTools>;
export type DeliverableToolCall = ToolCallUnion<DeliverableTools>;
export type DeliverableToolResult = ToolResultUnion<DeliverableTools>;