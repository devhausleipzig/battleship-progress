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

  // when rotate button is clicked rotate every ship
  rotateButton.addEventListener("click", () =>
    playerGrid.shipsToBePlaced.forEach((ship) => ship.rotate())
  );

  playerGrid.addListeners();

  const positionArray = computerGrid.positionArray;

  function getRadomElementFromArray<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // const gridChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  // const gridNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function calculateOffset<T>(
    shipLength: number,
    array: T[],
    element: T
  ): number {
    let offset = 0;
    const index = array.indexOf(element);
    const endingPostion = index + shipLength;

    if (endingPostion > array.length) {
      offset = endingPostion - array.length;
    }
    return offset;
  }

  function makeRandomShipPosition(ship: Ship): Position[] {
    const shipSquares: Position[] = [];
    const randomStartingPosition = getRadomElementFromArray(positionArray);
    const positionChar = randomStartingPosition[0];
    const positionNumber = parseInt(randomStartingPosition[2]);

    const randomIsHorizontal = Boolean(Math.round(Math.random()));
    ship.isHorizontal = randomIsHorizontal;

    if (ship.isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        const horizontalOffset = calculateOffset(
          ship.length,
          gridNumbers,
          positionNumber
        );
        const number = positionNumber + i - horizontalOffset;
        shipSquares.push(`${positionChar}-${number}`);
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        const verticalOffset = calculateOffset(
          ship.length,
          gridChars,
          positionChar
        );
        const charIndex = gridChars.indexOf(positionChar);
        const char = gridChars[charIndex + i - verticalOffset];
        shipSquares.push(`${char}-${positionNumber}`);
      }
    }
    return shipSquares;
  }

  function generateShipPlacement(ship: Ship): void {
    let shipSquares: Position[] = makeRandomShipPosition(ship);
    let isTaken: boolean = computerGrid.isTaken(shipSquares);

    while (isTaken) {
      shipSquares = makeRandomShipPosition(ship);
      isTaken = computerGrid.isTaken(shipSquares);
    }

    shipSquares.forEach((square) => computerGrid.set(square, ship.type));

    computerGrid.drawShip(shipSquares, ship.type);
  }

  computerGrid.ships.forEach((ship) => generateShipPlacement(ship));
});
