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
});
