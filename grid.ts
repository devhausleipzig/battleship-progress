type Position = `${string}-${number}`;
type PossibleValue = "" | ShipType;
type GridState = Record<Position, PossibleValue>;

class Grid {
  state: GridState;
  type: "player" | "computer";
  ships: Ship[] = [];
  element: HTMLElement;
  squares: HTMLElement[] = [];

  constructor(type: "player" | "computer") {
    this.type = type;
    this.state = {};

    for (let i = 0; i < gridChars.length; i++) {
      for (let j = 1; j <= 10; j++) {
        // add each key to the state object -> e.g. "a-1": ""
        const position: Position = `${gridChars[i]}-${j}`;
        this.state[position] = "";
      }
    }

    // create the element for the grid
    this.element = document.createElement("div");
    // add class and id to the element
    this.element.classList.add("grid");
    this.element.id = this.type === "player" ? "grid-player" : "grid-computer";

    // put the grid into it's container
    const container = document.querySelector(".grid-container") as HTMLElement;
    container.appendChild(this.element);
  }

  createBoard(): void {
    // loop over every entry in the state object and take the key
    for (const key in this.state) {
      // create a square
      const square = document.createElement("div");
      // give it the position and the grid-type as id
      square.id = `${this.type}-${key}`;
      this.element.appendChild(square);
      // hold a reference to each square on the instance
      this.squares.push(square);
    }
  }
}

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
