import { create } from 'zustand';
import { Deliverable } from '../types/deliverable';

interface DeliverableStore {
  deliverable: Deliverable | null;
  isDeliverableMode: boolean;
  sessionId: string | null;
  
  // Actions
  setDeliverable: (deliverable: Deliverable) => void;
  clearDeliverable: () => void;
  setDeliverableMode: (enabled: boolean) => void;
  setSessionId: (sessionId: string) => void;
}

export const useDeliverableStore = create<DeliverableStore>((set) => ({
  deliverable: null,
  isDeliverableMode: false,
  sessionId: null,
  
  setDeliverable: (deliverable) => set({ deliverable }),
  clearDeliverable: () => set({ deliverable: null }),
  setDeliverableMode: (enabled) => set({ isDeliverableMode: enabled }),
  setSessionId: (sessionId) => set({ sessionId }),
}));