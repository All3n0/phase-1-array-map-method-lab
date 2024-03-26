const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //here first we copy the values of tutorials then with a variable line create an arrow function.
  return tutorials.map((line) => {
    //then we create another constant where we splite the variable values and we key in the""to show where the split should start and end therefore dividing the headers into separate
    const tokens = line.split(" ");
    //then we create another constant called capitalizedtoken where we copy values of tokens and in the function we make the charachter in the first index capital and delete the one that was ins smaall case.
    const capitalizedTokens = tokens.map(
      (token) => token.charAt(0).toUpperCase() + token.slice(1)
    );
    //the final contant joins the lines therefore creating the whole array again.
    const response = capitalizedTokens.join(" ");
    return response;
  })
}

