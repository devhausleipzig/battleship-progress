type ShipType =
  | "destroyer"
  | "submarine"
  | "cruiser"
  | "battleship"
  | "carrier";

class Ship {
  type: ShipType;
  isHorizontal: boolean = true;
  length: number;

  constructor(type: ShipType) {
    this.type = type;
    switch (this.type) {
      case "destroyer":
        this.length = 2;
        break;
      case "cruiser":
      case "submarine":
        this.length = 3;
        break;
      case "battleship":
        this.length = 4;
        break;
      case "carrier":
        this.length = 5;
        break;
    }
  }
}

class PlayerShip extends Ship {
  element: HTMLElement;
  constructor(type: ShipType) {
    super(type);
    this.element = document.querySelector(
      `.${this.type}-container`
    ) as HTMLElement;
  }

  rotate() {
    this.isHorizontal = this.isHorizontal ? false : true;

    const shipSpecificClass = this.element.className.split(" ")[1];
    this.element.classList.toggle(`${shipSpecificClass}-vertical`);
  }
}
