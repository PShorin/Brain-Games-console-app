import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(5, 10);
  const defaultArray = [firstNumber];
  let lastNumber = firstNumber;
  for (let i = 0; i <= progressionLength - 1; i += 1) {
    defaultArray.push(lastNumber + progressionStep);
    lastNumber += progressionStep;
  }
  const whichNumberUnknown = getRandomNumber(1, defaultArray.length);
  const correctAnswer = defaultArray[whichNumberUnknown - 1];
  defaultArray[whichNumberUnknown - 1] = '..';
  const question = defaultArray.join(' ');

  return [question, correctAnswer];
};

const runGameProgression = () => {
  runGame(description, getQuestionAndAnswer);
};

export default runGameProgression;
