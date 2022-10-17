import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const inputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${inputName}`);
  return inputName;
};

export default askName;
