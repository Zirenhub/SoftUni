function arrayRotation(arr, num) {
  let output = arr;

  while (num !== 0) {
    output.push(output[0]);
    output.shift();

    num -= 1;
  }

  console.log(output.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
