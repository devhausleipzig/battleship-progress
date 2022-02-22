// type Position = `${string}-${number}`;
// type PossibleValue = "" | ShipType;
// type Grid = Record<Position, PossibleValue>;

// const playerGrid = document.getElementById("player-grid") as HTMLElement;
// const computerGrid = document.getElementById("computer-grid") as HTMLElement;

// for (let i = 0; i < gridChars.length; i++) {
//   for (let j = 1; j <= 10; j++) {
//     const playerId = `player-${gridChars[i]}-${j}`;
//     const computerId = `computer-${gridChars[i]}-${j}`;

//     const playerSquare = document.createElement("div");
//     playerSquare.id = playerId;

//     const computerSquare = document.createElement("div");
//     computerSquare.id = computerId;

//     playerGrid.appendChild(playerSquare);
//     computerGrid.appendChild(computerSquare);
//   }
// }

// const playerGridState: Grid = {};
// const computerGridState: Grid = {};

// function createKeyValuePair(
//   grid: Grid,
//   position: Position,
//   value: PossibleValue
// ) {
//   grid[position] = value;
// }

// function getValue(grid: Grid, position: Position) {
//   return grid[position];
// }

// for (let i = 0; i < gridChars.length; i++) {
//   for (let j = 1; j <= 10; j++) {
//     createKeyValuePair(playerGridState, `${gridChars[i]}-${j}`, "");
//     createKeyValuePair(computerGridState, `${gridChars[i]}-${j}`, "");
//   }
// }
