export function flat<Item>(l: Item[][]): Item[] {
  return l.reduce((acc, i) => acc.concat(i), []);
}
