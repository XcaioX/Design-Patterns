const path = require("path");
const fs = require("fs");

// Low level module
class MyDatabase {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;

    console.log(`Initializing database...`);
    this.capitals = {};

    let lines = fs
      .readFileSync(path.join(__dirname, "capitals.txt"))
      .toString()
      .split("\n");

    for (let i = 0; i < lines.length / 2; i++) {
      this.capitals[lines[2 * i]] = parseInt(lines[2 * i + 1]);
    }
  }

  getPopulation(city) {
    return this.capitals[city];
  }

  getAll() {
    return this.capitals;
  }
}

// High level module
class SingletonRecordFinder {
  totalPopulation(cities) {
    return cities
      .map((city) => new MyDatabase().getPopulation(city))
      .reduce((x, y) => x + y);
  }
}

console.log(
  new SingletonRecordFinder().totalPopulation(["Sao Paulo", "Mexico"])
);
