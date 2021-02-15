class Quiz {
  constructor() {
    if (this.constructor.name === 'Quiz')
      throw new Error('Quiz is a abstract class.');
  }

  printQuestion() {}
}

class BooleanQuiz extends Quiz {
  constructor(description) {
    super();
    this.description = description;
  }

  printQuestion() {
    console.log('1: true');
    console.log('2: false');
  }
}

class MultipleChoiceQuiz extends Quiz {
  constructor(description, options) {
    super();
    this.description = description;
    this.options = options;
  }

  printQuestion() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}: ${option}`);
    });
  }
}

class TextQuiz extends Quiz {
  constructor(description) {
    super();
    this.description = description;
  }

  printQuestion() {
    console.log('Answer: _______');
  }
}

class PrintQuiz {
  print(quizes) {
    return quizes.forEach((x) => x.printQuestion());
  }
}

const questions = [
  new BooleanQuiz('This is useful?'),
  new MultipleChoiceQuiz('What is your favorite language?', [
    'JS',
    'PY',
    'C++',
  ]),
  new TextQuiz('Describe your favorite js feature'),
];

const printQuiz = new PrintQuiz();
printQuiz.print(questions);
