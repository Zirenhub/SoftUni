function magicSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    let output = '';

    for (let b = i + 1; b < arr.length; b++) {
      let nextNum = arr[b];

      if (currentNum + nextNum === sum) {
        output = `${currentNum} ${nextNum}`;
        console.log(output);
      }
    }
  }
}

magicSum(
  [1, 2, 3, 4, 5, 6],

  6
);
