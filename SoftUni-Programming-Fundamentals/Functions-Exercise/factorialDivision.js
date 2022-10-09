function factorialDivision(numOne, numTwo) {
  const factorialOfNum = (num) => {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * factorialOfNum(num - 1);
    }
  };

  const factorialOfNumOne = factorialOfNum(numOne);
  const factorialOfNumTwo = factorialOfNum(numTwo);

  console.log((factorialOfNumOne / factorialOfNumTwo).toFixed(2));
}

factorialDivision(5, 2);
