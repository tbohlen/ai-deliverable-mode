import { useDeliverableStore } from "@/lib/store/deliverable-store";
import { Deliverable } from "./deliverable";
import { DeliverableModeEmptyState } from "./deliverable-mode-empty-state";

/**
 * Right Column component that displays deliverable mode content
 * Positioned on the right side with custom styling
 */
export function RightColumn() {
  const { deliverable } = useDeliverableStore();

  return (
    <div className="w-1 border-l bg-muted/30 overflow-y-auto h-full w-full">
      {deliverable ? (
        <Deliverable deliverable={deliverable} />
      ) : (
        <DeliverableModeEmptyState />
      )}
    </div>
  );
}