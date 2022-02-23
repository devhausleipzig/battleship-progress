type Position = `${string}-${number}`;
type PossibleValue = "" | ShipType;
type GridState = Record<Position, PossibleValue>;

abstract class Grid {
  protected state: GridState;
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
      square.innerHTML = key;
      this.element.appendChild(square);
      // hold a reference to each square on the instance
      this.squares.push(square);
    }
  }

  // Get value at given key from our state
  get(position: Position): PossibleValue {
    return this.state[position];
  }

  // Update the state at give key
  set(position: Position, value: PossibleValue): void {
    this.state[position] = value;
  }

  // Check if the object has a truthy value at given key
  has(position: Position): boolean {
    const value = this.get(position);
    return Boolean(value);
  }
}

class PlayerGrid extends Grid {
  constructor() {
    super("player");
  }
}

class ComputerGrid extends Grid {
  constructor() {
    super("computer");
  }
}
