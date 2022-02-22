document.addEventListener("DOMContentLoaded", () => {
  const playerGrid = document.getElementById("player-grid") as HTMLElement;
  const computerGrid = document.getElementById("computer-grid") as HTMLElement;
  const rotateButton = document.getElementById("rotate") as HTMLElement;

  const gridChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  for (let i = 0; i < gridChars.length; i++) {
    for (let j = 1; j <= 10; j++) {
      const playerId = `player-${gridChars[i]}-${j}`;
      const computerId = `computer-${gridChars[i]}-${j}`;

      const playerSquare = document.createElement("div");
      playerSquare.id = playerId;

      const computerSquare = document.createElement("div");
      computerSquare.id = computerId;

      playerGrid.appendChild(playerSquare);
      computerGrid.appendChild(computerSquare);
    }
  }

  function rotateShips() {
    const ships = document.querySelector(".ships")?.children as HTMLCollection;
    const shipsArray = Array.from(ships);

    shipsArray.forEach((ship) => {
      const shipSpecificClass = ship.className.split(" ")[1];
      ship.classList.toggle(`${shipSpecificClass}-vertical`);
    });
  }

  type ShipType =
    | "destroyer"
    | "submarine"
    | "cruiser"
    | "battleship"
    | "carrier";
  type Position = `${string}-${number}`;
  type PossibleValue = "" | ShipType;
  type Grid = Record<Position, PossibleValue>;

  const playerGridState: Grid = {};
  const computerGridState: Grid = {};

  function createKeyValuePair(
    grid: Grid,
    position: Position,
    value: PossibleValue
  ) {
    grid[position] = value;
  }

  function getValue(grid: Grid, position: Position) {
    return grid[position];
  }

  for (let i = 0; i < gridChars.length; i++) {
    for (let j = 1; j <= 10; j++) {
      createKeyValuePair(playerGridState, `${gridChars[i]}-${j}`, "");
      createKeyValuePair(computerGridState, `${gridChars[i]}-${j}`, "");
    }
  }

  type Orientation = "horizontal" | "vertical";
  type Ship = {
    length: number;
    type: ShipType;
    orientation: Orientation;
  };

  const destroyer: Ship = {
    length: 2,
    type: "destroyer",
    orientation: "horizontal",
  };

  rotateButton.addEventListener("click", rotateShips);
});
