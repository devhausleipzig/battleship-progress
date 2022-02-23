// Wait for DOMContent to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the rotate button
  const rotateButton = document.getElementById("rotate") as HTMLElement;

  // Instanciate out grids
  const playerGrid = new PlayerGrid();
  const computerGrid = new ComputerGrid();

  // create the grid cells
  playerGrid.createBoard();
  computerGrid.createBoard();

  // Create all five ships and put them into an array
  const shipsArray = shipNames.map((shipName) => new PlayerShip(shipName));

  // when rotate button is clicked rotate every ship
  rotateButton.addEventListener("click", () =>
    shipsArray.forEach((ship) => ship.rotate())
  );

  let selectedShipPart: number;
  let selectedShip: PlayerShip;

  shipsArray.forEach((ship) => {
    ship.element.addEventListener("mousedown", (event) => {
      const target = event.target as HTMLElement;
      selectedShipPart = parseInt(target.id.split("-")[1]);
    });
    ship.element.addEventListener("dragstart", () => {
      selectedShip = ship;
    });
  });

  playerGrid.element.addEventListener("dragstart", (event) =>
    event.preventDefault()
  );
  playerGrid.element.addEventListener("dragover", (event) =>
    event.preventDefault()
  );
  playerGrid.element.addEventListener("dragenter", (event) =>
    event.preventDefault()
  );
  playerGrid.element.addEventListener("dragleave", (event) =>
    event.preventDefault()
  );
  playerGrid.element.addEventListener("drop", (event) => {
    const target = event.target as HTMLElement;
    const position = makePositionFromId(target.id);
    placeShip(selectedShip, selectedShipPart, position);
  });

  function placeShip(ship: PlayerShip, shipPart: number, position: Position) {
    // Create a binding that holds all of the positions the ship takes
    const shipSquares: Position[] = [];
    const positionChar = position.split("-")[0];
    const positionNumber = parseInt(position.split("-")[1]);

    if (ship.isHorizontal) {
      // Determine how far the ship extends horizontally (number)
      for (let i = 0; i < ship.length; i++) {
        const number = positionNumber + i - shipPart;
        // if ship occupies a cell with a number greater than 10 or less than 1 -> invalid
        if (number > 10 || number < 1) {
          // Return ship if position is invalid
          return;
        }
        shipSquares.push(`${positionChar}-${number}`);
      }
      console.log(shipSquares);
    } else {
      for (let i = 0; i < ship.length; i++) {
        // const charIndex = gridChars.indexOf(positionChar);
        // const row = charIndex + 1 + i - shipPart;

        // if (row > 10 || row < 1) {
        //   console.log("invalid");
        //   return;
        // }
        // console.log("valid");
        const charIndex = gridChars.indexOf(positionChar);
        const char = gridChars[charIndex + i - shipPart];
        if (!char) {
          return;
        }
        shipSquares.push(`${char}-${positionNumber}`);
      }
    }

    const isTaken: boolean = shipSquares.some((square) =>
      playerGrid.get(square)
    );

    if (!isTaken) {
      shipSquares.forEach((square) => playerGrid.set(square, ship.type));
      // drawShip
      ship.element.remove();
    }
  }
});
