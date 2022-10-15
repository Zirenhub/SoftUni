function searchForANumber(arr, commands) {
  const numsToTake = commands[0];
  let numsToDelete = commands[1];
  const numToSearch = commands[2];

  const output = arr.slice(0, numsToTake);
  while (numsToDelete--) {
    output.shift();
  }

  let counter = 0;

  output.forEach((num) => {
    if (num === numToSearch) {
      counter += 1;
    }
  });

  console.log(`Number ${numToSearch} occurs ${counter} times.`);
}

searchForANumber(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
