interface Entity {
  attackDamage?: number;
  health?: number;
  name?: number;

  move(): void;
  attack(): void;
  takeDamage(): void;
}

class Character implements Entity {
  move() {}
  attack() {}
  takeDamage() {}
}

class Turret implements Entity {
  move() {
    // ERROR: Cannot move
  }
}
