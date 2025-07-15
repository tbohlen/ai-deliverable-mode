import { Deliverable } from './types/deliverable';

/**
 * DeliverableManager handles storage and retrieval of deliverables based on sessionID
 * Uses in-memory storage for deliverables keyed by sessionID
 */
export class DeliverableManager {
  private static instance: DeliverableManager;
  private deliverables: Map<string, Deliverable> = new Map();

  private constructor() {}

  /**
   * Get singleton instance of DeliverableManager
   */
  static getInstance(): DeliverableManager {
    if (!DeliverableManager.instance) {
      DeliverableManager.instance = new DeliverableManager();
    }
    return DeliverableManager.instance;
  }

  /**
   * Set deliverable for a session
   */
  setDeliverable(sessionId: string, title: string, content: string): Deliverable {
    const now = new Date();
    const existingDeliverable = this.deliverables.get(sessionId);
    
    const deliverable: Deliverable = {
      sessionId,
      title,
      content,
      createdAt: existingDeliverable?.createdAt || now,
      updatedAt: now,
    };

    this.deliverables.set(sessionId, deliverable);
    return deliverable;
  }

  /**
   * Get deliverable for a session
   */
  getDeliverable(sessionId: string): Deliverable | null {
    return this.deliverables.get(sessionId) || null;
  }
}