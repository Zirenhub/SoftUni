function equalNeighbors(matrix) {
  let count = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length - 1; col++) {
      if (matrix[row][col] === matrix[row][col + 1]) {
        count++;
      }
      if (row > 0 && matrix[row][col] === matrix[row - 1][col]) {
        count++;
      }
    }
    if (
      row < matrix.length - 1 &&
      matrix[row][matrix[row].length - 1] === matrix[row + 1][0]
    ) {
      count++;
    }
  }
  console.log(count);
}

equalNeighbors([
  ['2', '2', '5', '7', '4'],
  ['4', '0', '5', '3', '4'],
  ['2', '5', '5', '4', '2'],
]);
equalNeighbors([
  ['test', 'yes', 'yo', 'ho'],
  ['well', 'done', 'yo', '6'],
  ['not', 'done', 'yet', '5'],
]);
