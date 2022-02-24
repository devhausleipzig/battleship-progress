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
});
