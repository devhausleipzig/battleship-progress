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

  let selectedShipPart;
  let selectedShip;

  shipsArray.forEach((ship) => {
    ship.element.addEventListener("mousedown", (event) => {
      selectedShipPart = event.target;
    });
    ship.element.addEventListener("dragstart", () => {
      console.log(ship.element);
      selectedShip = ship.element;
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
    makePositionFromId(target.id);
  });
});
