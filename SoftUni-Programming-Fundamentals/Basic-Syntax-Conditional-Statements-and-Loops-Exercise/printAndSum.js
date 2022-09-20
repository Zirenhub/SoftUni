function printAndSum(start, end) {
  let total = 0;
  let numDisplay = '';
  for (let i = start; i <= end; i++) {
    total += i;
    numDisplay += `${i} `;
  }

  console.log(numDisplay);
  console.log(`Sum: ${total}`);
}

printAndSum(5, 10);
