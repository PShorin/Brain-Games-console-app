import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named
import { askName } from '../src/cli.js';

const userName = askName();

const gameCount = 3;

const gameIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= gameCount; i += 1) {
    const numberToCheck1 = Math.floor(Math.random() * 100);
    console.log(`Question: ${numberToCheck1}`);
    const userAnswer1 = readlineSync.question('Your answer: ');
    const userAnswer1toTrueOrFalse = (userAnswer1 === 'yes');
    const isRandomNumberEven1 = (numberToCheck1 % 2 === 0);
    const oppositeAnswer = () => {
      if (userAnswer1 === 'yes') return 'no';
      return 'yes';
    };
    if (userAnswer1toTrueOrFalse === isRandomNumberEven1) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer1}' is wrong answer ;(. Correct answer was '${oppositeAnswer()}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === gameCount) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export { gameIsEven };
