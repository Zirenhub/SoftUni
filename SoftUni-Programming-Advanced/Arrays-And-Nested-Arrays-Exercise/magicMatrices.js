function isMagical(matrix) {
  let sum = 0;
  // Get the sum of the first row
  for (let i = 0; i < matrix[0].length; i++) {
    sum += matrix[0][i];
  }
  // Check the sum of the other rows
  for (let i = 1; i < matrix.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j];
    }
    if (rowSum !== sum) {
      console.log('not magical');
      return;
    }
  }
  // Check the sum of the columns
  for (let i = 0; i < matrix[0].length; i++) {
    let colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      colSum += matrix[j][i];
    }
    if (colSum !== sum) {
      console.log('not magical');
      return;
    }
  }
  console.log('is magical');
}
