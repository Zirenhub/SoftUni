function greatestCommonDivisorGCD(numOne, numTwo) {
  let absNumOne = Math.abs(numOne);
  let absNumTwo = Math.abs(numTwo);

  while (absNumTwo) {
    let t = absNumTwo;
    absNumTwo = absNumOne % absNumTwo;
    absNumOne = t;
  }

  console.log(absNumOne);
}

greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);
