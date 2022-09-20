function specialNumbers(input) {
  let num = Number(input[0]);
  let consoleTemp = '';

  for (let i = 1111; i <= 9999; i++) {
    let currentNum = '' + i;
    let buff = '';
    let counter = 0;

    while (counter < currentNum.length) {
      let currentDigit = currentNum[counter];
      if (num % currentDigit === 0) {
        buff += currentDigit;
      } else {
        break;
      }

      if (buff.length >= 4) {
        consoleTemp += buff + ' ';
      }

      counter++;
    }
  }
  console.log(consoleTemp);
}

specialNumbers(['3']);
