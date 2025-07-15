import { create } from 'zustand';
import { Deliverable } from '../types/deliverable';
import { WorkflowStep } from '../types/workflow-step';
import { Annotation } from '../types/annotation';

interface ClientStore {
  deliverable: Deliverable | null;
  isDeliverableMode: boolean;
  sessionId: string | null;
  stakeholders: string | null;
  goals: string | null;
  questions: string[] | null;
  workflowStep: WorkflowStep | null;
  annotations: Annotation[];
  selectedAnnotation: Annotation | null;
  
  // Actions
  setDeliverable: (deliverable: Deliverable) => void;
  clearDeliverable: () => void;
  setSessionId: (sessionId: string) => void;
  setStakeholders: (stakeholders: string) => void;
  setGoals: (goals: string) => void;
  setQuestions: (questions: string[]) => void;
  setWorkflowStep: (workflowStep: WorkflowStep) => void;
  setAnnotations: (annotations: Annotation[]) => void;
  setSelectedAnnotation: (annotation: Annotation | null) => void;
}

export const useClientStore = create<ClientStore>((set) => ({
  deliverable: {
    sessionId: 'test-session',
    title: 'The Dodo: A Case Study in Extinction',
    content: `The Dodo: A Case Study in Extinction

Introduction

The dodo (Raphus cucullatus) was a flightless bird endemic to the island of Mauritius in the Indian Ocean. This remarkable species became extinct in the late 17th century, making it one of the most famous examples of human-caused extinction in history.

Physical Characteristics

The dodo was a large bird, standing approximately 3 feet tall and weighing around 20-25 kg. Key features included a distinctive hooked beak, small vestigial wings incapable of flight, strong sturdy legs adapted for ground dwelling, and grayish-brown plumage with a white tail tuft.

Habitat and Behavior

Natural Environment
Dodos inhabited the coastal forests of Mauritius, where they nested on the ground and fed on fallen fruits, seeds, roots, and small stones for digestion.

Social Structure
Recent research suggests dodos were not the clumsy, slow birds often depicted in popular culture. Instead, they were likely agile forest dwellers with complex social behaviors.

Extinction Factors

The dodo's extinction resulted from multiple interconnected factors. The dodo's fate was sealed not by a single cause, but by a perfect storm of human activity and ecological disruption.

Primary causes included habitat destruction due to deforestation, hunting by sailors and settlers, introduced species like pigs, rats, and dogs that destroyed nests, and competition for food resources.

Legacy and Lessons

The dodo's extinction serves as a powerful reminder of humanity's impact on biodiversity. Modern conservation efforts draw heavily on lessons learned from this tragic loss, emphasizing the importance of ecosystem preservation, species monitoring, intervention strategies, and international cooperation.

Conclusion

While we cannot bring back the dodo, its story continues to educate and inspire conservation efforts worldwide. The phrase "dead as a dodo" may be common, but the lessons from this species' extinction remain very much alive.`,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  isDeliverableMode: true,
  sessionId: 'test-session',
  stakeholders: 'Conservation biologists, museum curators, and environmental policy makers who need to understand extinction case studies.',
  goals: 'Stakeholders want to use this analysis to inform current conservation strategies and educate the public about biodiversity loss.',
  questions: [
    'What specific evidence supports the timeline of the dodo\'s extinction?',
    'How do we know the dodo wasn\'t as clumsy as depicted in popular culture?',
    'What modern conservation techniques could have saved the dodo?',
    'How does the dodo case study compare to other recent extinctions?'
  ],
  workflowStep: {
    order: 1,
    title: 'Create Deliverable',
    humanDescription: 'Prepare your deliverable with AI assistance',
    aiDescription: 'AI assists user in creating their deliverable content. During this step, the deliverable will be shown on screen for the user.',
    aiPrompt: 'During this step, you should be a helpful AI assistant creating the best possible deliverable for this user.'
  },
  annotations: [
    // Annotations positioned at strategic points in the essay
    {
      id: '1',
      firstCharacter: 467,
      lastCharacter: 507,
      title: 'Key Species Classification',
      description: 'The scientific name *Raphus cucullatus* is critical - stakeholders may ask about taxonomic classification and how we know this species was distinct from other island birds.'
    },
    {
      id: '2',
      firstCharacter: 1136,
      lastCharacter: 1216,
      title: 'Important Behavioral Evidence',
      description: 'This challenges popular misconceptions. Be prepared to discuss recent paleontological evidence and 3D modeling studies that revised our understanding of dodo agility.'
    },
    {
      id: '3',
      firstCharacter: 1827,
      lastCharacter: 1947,
      title: 'Critical Conservation Lesson',
      description: 'This quote emphasizes the complexity of extinction causes. Stakeholders may want to discuss how this applies to current endangered species management.'
    }
  ],
  selectedAnnotation: null,
  
  setDeliverable: (deliverable) => set({ deliverable }),
  clearDeliverable: () => set({ deliverable: null }),
  setSessionId: (sessionId) => set({ sessionId }),
  setStakeholders: (stakeholders) => set({ stakeholders }),
  setGoals: (goals) => set({ goals }),
  setQuestions: (questions) => set({ questions }),
  setWorkflowStep: (workflowStep) => set({ workflowStep }),
  setAnnotations: (annotations) => set({ annotations }),
  setSelectedAnnotation: (annotation) => set({ selectedAnnotation: annotation }),
}));