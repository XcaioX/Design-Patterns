class FlyingBird {
  fly() {
    console.log('I can fly');
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim');
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log('I can quack');
  }
}

class Penguin extends SwimmingBird {}

function makeFlyBirdFly(bird) {
  bird.fly();
}

function makeSwimBirdFly(bird) {
  bird.swim();
}

const duck = new Duck();
const penguim = new Penguin();

makeFlyBirdFly(duck);
makeSwimBirdFly(penguim);
