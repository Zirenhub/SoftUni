function examPreparation(input) {
  let index = 0;
  let badGradesLimit = input[index];
  index++;
  let start = input[index]; //Money

  let goodGrade = 0;
  let badGrade = 0;
  let sum = 0;
  let totalTasks = 0;
  let lastTask = '';

  while (start !== 'Enough') {
    index++;
    start = input[index];
    if (isNaN(start)) {
      totalTasks++;
      lastTask = input[index - 2];
    } else {
      if (+start > 4) {
        goodGrade++;
      } else {
        badGrade++;
        if (badGrade >= +badGradesLimit) {
          console.log(
            `You need a break, ${badGradesLimit} poor grades.`
          );
          return;
        }
      }
      sum = sum + +start;
    }
  }
  let fixedSum = sum / totalTasks;
  console.log(`Average score: ${fixedSum.toFixed(2)}`);
  console.log(`Number of problems: ${totalTasks}`);
  console.log(`Last problem: ${lastTask}`);
}

examPreparation([
  '2',

  'Income',

  '3',

  'Game Info',

  '6',

  'Best Player',

  '4',
]);
