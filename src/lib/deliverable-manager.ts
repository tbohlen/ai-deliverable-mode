import { Deliverable } from './types/deliverable';

/**
 * DeliverableManager handles storage and retrieval of session data based on sessionID
 * Uses in-memory storage for general session data keyed by sessionID
 */
export class DeliverableManager {
  private static instance: DeliverableManager;
  private sessionData: Map<string, Map<string, any>> = new Map();

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
   * Get session data map for a session, creating it if it doesn't exist
   */
  private getSessionData(sessionId: string): Map<string, any> {
    if (!this.sessionData.has(sessionId)) {
      this.sessionData.set(sessionId, new Map());
    }
    return this.sessionData.get(sessionId)!;
  }

  /**
   * Set a value for a key in a session's data
   */
  setValue(sessionId: string, key: string, value: any): void {
    const sessionMap = this.getSessionData(sessionId);
    sessionMap.set(key, value);
  }

  /**
   * Get a value for a key from a session's data
   */
  getValue(sessionId: string, key: string): any {
    const sessionMap = this.getSessionData(sessionId);
    return sessionMap.get(key);
  }

  /**
   * Set deliverable for a session
   */
  setDeliverable(sessionId: string, title: string, content: string): Deliverable {
    const now = new Date();
    const existingDeliverable = this.getValue(sessionId, 'deliverable');
    
    const deliverable: Deliverable = {
      sessionId,
      title,
      content,
      createdAt: existingDeliverable?.createdAt || now,
      updatedAt: now,
    };

    this.setValue(sessionId, 'deliverable', deliverable);
    return deliverable;
  }

  /**
   * Get deliverable for a session
   */
  getDeliverable(sessionId: string): Deliverable | null {
    return this.getValue(sessionId, 'deliverable') || null;
  }
}