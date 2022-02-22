document.addEventListener("DOMContentLoaded", () => {
  const rotateButton = document.getElementById("rotate") as HTMLElement;

  const shipsArray = [
    new PlayerShip("destroyer"),
    new PlayerShip("submarine"),
    new PlayerShip("cruiser"),
    new PlayerShip("battleship"),
    new PlayerShip("carrier"),
  ];

  rotateButton.addEventListener("click", () =>
    shipsArray.forEach((ship) => ship.rotate())
  );
});
