import { Deliverable } from '../types/deliverable';
import { DeliverableToolCall } from '../tools/deliverable-tools';
import { StakeholderToolCall } from '../tools/stakeholder-tools';
import { WorkflowStepToolCall } from '../tools/workflow-step-tools';

interface DeliverableToolHandlerDependencies {
  setDeliverable: (deliverable: Deliverable) => void;
  setStakeholders: (stakeholders: string) => void;
  setGoals: (goals: string) => void;
  setQuestions: (questions: string[]) => void;
  setWorkflowStep: (workflowStep: any) => void;
}

type AllToolCalls = DeliverableToolCall | StakeholderToolCall | WorkflowStepToolCall;

/**
 * Creates tool handlers for all tool calls
 */
export function createToolHandlers({ 
  setDeliverable, 
  setStakeholders,
  setGoals,
  setQuestions,
  setWorkflowStep
}: DeliverableToolHandlerDependencies) {
  return {
    setDeliverable: (toolCall: DeliverableToolCall) => {
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
    },
    setStakeholders: (toolCall: StakeholderToolCall) => {
      if (toolCall.toolName === 'setStakeholders') {
        setStakeholders(toolCall.args.stakeholders);
      }
    },
    setGoals: (toolCall: StakeholderToolCall) => {
      if (toolCall.toolName === 'setGoals') {
        setGoals(toolCall.args.goals);
      }
    },
    setQuestions: (toolCall: StakeholderToolCall) => {
      if (toolCall.toolName === 'setQuestions') {
        setQuestions(toolCall.args.questions);
      }
    },
    setWorkflowStep: (toolCall: WorkflowStepToolCall) => {
      if (toolCall.toolName === 'setWorkflowStep') {
        setWorkflowStep(toolCall.args.stepOrder);
      }
    }
  };
}