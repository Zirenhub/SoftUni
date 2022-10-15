function distinctArray(arr) {
  const output = [...new Set(arr)];

  console.log(output.join(' '));
}

distinctArray([
  7, 8, 9, 7, 2, 3,

  4, 1, 2,
]);
