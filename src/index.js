import readlineSync from 'readline-sync';

const gameCount = 3;

const runGame = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}`);

  console.log(description);
  for (let i = 1; i <= gameCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${inputName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${inputName}!`);
};

export default runGame;
