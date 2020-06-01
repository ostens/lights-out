export function randomTiles() {
  const tiles = [...Array(25)].map(() => Math.random() <= 0.5);
  return tiles;
}