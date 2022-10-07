function addAndSubtract(firstNum, secondNum, thirdNum) {
  const calculateFirstTwo = (numOne, numTwo) => {
    return numOne + numTwo;
  };

  const firstPart = calculateFirstTwo(firstNum, secondNum);

  const result = firstPart - thirdNum;

  console.log(result);
}

addAndSubtract(23, 6, 10);
