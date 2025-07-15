import { Deliverable } from '../types/deliverable';
import { DeliverableToolCall } from '../tools/deliverable-tools';

interface DeliverableToolHandlerDependencies {
  setDeliverable: (deliverable: Deliverable) => void;
  setDeliverableMode: (enabled: boolean) => void;
}

/**
 * Creates tool handlers for deliverable-related tool calls
 */
export function createDeliverableToolHandlers({ 
  setDeliverable, 
  setDeliverableMode 
}: DeliverableToolHandlerDependencies) {
  return {
    setDeliverable: (toolCall: DeliverableToolCall) => {
      // Assuming toolCall.args contains the deliverable data
      if (toolCall.toolName === 'setDeliverable') {
        // This is very messy. Would be much cleaner to accept through a backend API.
        const deliverable: Deliverable = {
          title: toolCall.args.title,
          content: toolCall.args.content,
          sessionId: '', // Will be set by the backend
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        setDeliverable(deliverable);
      }
    }
  };
}