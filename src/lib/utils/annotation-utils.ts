import { Annotation } from '@/lib/types/annotation';

/**
 * Highlights the selected annotation text with "**" markers for bold
 */
export function highlightSelectedAnnotation(
  text: string,
  selectedAnnotation: Annotation | null
): string {
  if (!selectedAnnotation) {
    return text;
  }

  // Insert "**" markers around the selected annotation's text span for bold
  const beforeText = text.slice(0, selectedAnnotation.firstCharacter);
  const highlightedText = text.slice(selectedAnnotation.firstCharacter, selectedAnnotation.lastCharacter);
  const afterText = text.slice(selectedAnnotation.lastCharacter);

  return beforeText + '**' + highlightedText + '**' + afterText;
}

/**
 * Creates annotation lookup map for easy access
 */
export function createAnnotationLookup(annotations: Annotation[]): Map<string, { annotation: Annotation; number: number }> {
  const lookup = new Map();
  annotations.forEach((annotation, index) => {
    lookup.set(annotation.id, { annotation, number: index + 1 });
  });
  return lookup;
}