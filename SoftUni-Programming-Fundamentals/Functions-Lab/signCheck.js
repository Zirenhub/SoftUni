function signCheck(numOne, numTwo, numThree) {
  if (numOne * numThree * numTwo < 0) {
    console.log('Negative');
  } else {
    console.log('Positive');
  }
}

signCheck(5, 12, -15);
