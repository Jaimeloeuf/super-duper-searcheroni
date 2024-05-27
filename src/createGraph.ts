import type { Graph } from "./Graph";

export function createGraph(string: string) {
  const rootMap: Graph = new Map();

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    const indexes = rootMap.get(character);
    if (indexes === undefined) {
      const set = new Set<number>().add(i);
      rootMap.set(character, set);
    } else {
      indexes.add(i);
    }
  }

  return rootMap;
}
