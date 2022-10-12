import readlineSync from 'readline-sync';
import { askName } from './cli.js';

const userName = askName();

const gameCount = 3;

export const runGame = (description, getQuestionAndAnswer) => {
  console.log(description);
  for (let i = 1; i <= gameCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === gameCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
