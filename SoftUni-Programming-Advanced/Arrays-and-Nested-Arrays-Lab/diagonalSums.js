function diagonalSums(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - 1 - i];
  }

  console.log(firstDiagonal, secondDiagonal);
}

diagonalSums([
  [20, 40],
  [10, 60],
]); // 20 + 60 , 40 + 10
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
