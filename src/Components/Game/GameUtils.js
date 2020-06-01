export function randomise() {
  const tiles = {};
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      const lightOn = Math.random() <= 0.5;
      if (tiles[x] === undefined) tiles[x] = {};
      tiles[x][y] = { lightOn, coord: { x, y } };
    }
  };
  return tiles;
}

export const neighbors = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 }
];