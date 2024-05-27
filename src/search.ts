import type { Graph } from "./Graph";

// @todo Support case insensitive searching
export function search(
  graph: Graph,
  searchString: string
): Array<number> | false {
  const firstCharacterIndexes = graph.get(searchString[0]);
  if (firstCharacterIndexes === undefined) {
    return false;
  }

  let lastCharacterIndexes = firstCharacterIndexes;

  for (let i = 1; i < searchString.length; i++) {
    const character = searchString[i];

    const currentCharacterIndexes = graph.get(character);
    if (currentCharacterIndexes === undefined) {
      return false;
    }

    const filteredCurrentCharacterIndexes = new Set<number>();
    for (const currentCharacterIndex of currentCharacterIndexes) {
      // The current character index is valid because it is chained with the last
      if (lastCharacterIndexes.has(currentCharacterIndex - 1)) {
        filteredCurrentCharacterIndexes.add(currentCharacterIndex);
      }
    }

    if (filteredCurrentCharacterIndexes.size === 0) {
      return false;
    }

    lastCharacterIndexes = filteredCurrentCharacterIndexes;
  }

  const startPositions: Array<number> = [];
  for (const index of lastCharacterIndexes) {
    startPositions.push(index - searchString.length);
  }

  return startPositions;
}
