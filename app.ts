// Wait for DOMContent to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab the rotate button
  const rotateButton = document.getElementById("rotate") as HTMLElement;

  // Create all five ships and put them into an array
  const shipsArray = [
    new PlayerShip("destroyer"),
    new PlayerShip("submarine"),
    new PlayerShip("cruiser"),
    new PlayerShip("battleship"),
    new PlayerShip("carrier"),
  ];

  // when rotate button is clicked rotate every ship
  rotateButton.addEventListener("click", () =>
    shipsArray.forEach((ship) => ship.rotate())
  );
});
