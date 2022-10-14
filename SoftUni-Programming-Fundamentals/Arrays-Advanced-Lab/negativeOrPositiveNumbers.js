function negativeOrPositiveNumbers(arr) {
  let output = [];

  arr.forEach((element, index) => {
    const currentNumber = Number(element);
    if (currentNumber < 0) {
      output.unshift(currentNumber);
    } else {
      output.push(currentNumber);
    }
  });

  console.log(output.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
