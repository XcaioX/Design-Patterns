function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);

    switch (question.type) {
      case 'boolean':
        console.log('1: true');
        console.log('2: false');
        break;

      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}: ${option}`);
        });
        break;

      case 'text':
        console.log('Answer: _____');
        break;
    }
  });
}

const questions = [
  {
    type: 'boolean',
    description: 'This is useful?',
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['JS', 'PY', 'C++'],
  },
  {
    type: 'text',
    description: 'Describe your favorite js feature',
  },
];

printQuiz(questions);
