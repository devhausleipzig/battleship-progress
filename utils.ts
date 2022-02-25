const gridChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const gridNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shipNames: ShipType[] = [
  "destroyer",
  "submarine",
  "cruiser",
  "battleship",
  "carrier",
];

function makePositionFromId(id: string): Position {
  const [char, number] = id.split("-").slice(1);
  return `${char}-${parseInt(number)}`;
}
