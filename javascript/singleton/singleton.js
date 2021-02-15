class FancyLoggerSingleton {
  constructor() {
    if (FancyLoggerSingleton.instance == null) {
      this.logs = [];
      FancyLoggerSingleton.instance = this;
    }

    return FancyLoggerSingleton.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger1 = new FancyLoggerSingleton();
const logger2 = new FancyLoggerSingleton();
console.log(logger1 === logger2);
