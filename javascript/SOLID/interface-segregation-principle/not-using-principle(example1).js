class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {}

  fax(doc) {}

  scan(doc) {}
}

class OldFashionedPrinter extends Machine {
  print(doc) {}

  // fax(doc) {}

  scan() {
    throw new NotImplementedError("Not implemented!");
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented`;
    super(msg);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

const printer = new OldFashionedPrinter();
printer.scan();
