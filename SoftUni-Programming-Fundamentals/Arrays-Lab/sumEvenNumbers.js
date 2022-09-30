function sumEvenNumbers(arr) {
  let sum = 0;

  arr.forEach((element) => {
    const num = Number(element);

    if (num % 2 === 0) {
      sum += num;
    }
  });

  console.log(sum);
}

sumEvenNumbers(['3', '5', '7', '9']);
