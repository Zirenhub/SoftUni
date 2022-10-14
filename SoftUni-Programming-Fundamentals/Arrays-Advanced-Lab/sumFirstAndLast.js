function sumFirstAndLast(arr) {
  const first = Number(arr[0]);
  const last = Number(arr[arr.length - 1]);

  const output = first + last;

  console.log(output);
}

sumFirstAndLast(['20', '30', '40']);
