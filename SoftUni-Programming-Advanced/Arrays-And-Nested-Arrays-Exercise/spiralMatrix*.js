function spiralMatrix(rows, cols) {
  let matrix = Array.from({ length: rows }, () => Array.from({ length: cols }));
  let count = 1;
  let startRow = 0;
  let endRow = rows - 1;
  let startCol = 0;
  let endCol = cols - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = count++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = count++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = count++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = count++;
    }
    startCol++;
  }
  console.log(matrix.map((row) => row.join(' ')).join('\n'));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
