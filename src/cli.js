import readlineSync from 'readline-sync';

const askName = () => {
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}`);
  return inputName;
};

// eslint-disable-next-line import/prefer-default-export
export { askName };
