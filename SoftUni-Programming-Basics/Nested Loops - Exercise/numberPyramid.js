function numberPyramid(input) {
  let num = Number(input[0]);
  let current = 1;
  let isBigger = false;
  printCurrentLine = '';

  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      if (current > num) {
        isBigger = true;
        break;
      }
      printCurrentLine += current + ' ';
      current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = '';
    if (isBigger) {
      break;
    }
  }
}

numberPyramid(['15']);
