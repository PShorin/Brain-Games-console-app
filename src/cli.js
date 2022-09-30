import readlineSync from "readline-sync";

const askName = () => {
  let inputName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${inputName}`);
  return inputName;
};

export { askName };
