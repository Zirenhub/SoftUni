function trainTheTrainers(input) {
  let index = 0;
  let juryNumber = Number(input[index]);
  index++;
  let presentationName = input[index];
  let command = input[index];

  let globalGrades = 0;
  let counter = 0;

  while (command !== 'Finish') {
    let currentPresentation = command;
    let gradesCurrent = 0;

    for (let i = 1; i <= juryNumber; i++) {
      index++;
      counter++;
      gradesCurrent += Number(input[index]);
    }
    let averageGrade = gradesCurrent / juryNumber;
    console.log(
      `${currentPresentation} - ${averageGrade.toFixed(2)}.`
    );

    index++;
    command = input[index];
    globalGrades += gradesCurrent;
  }
  if (command === 'Finish') {
    globalGrades = globalGrades.toFixed(2);
    let result = globalGrades / counter;
    console.log(
      `Student's final assessment is ${result.toFixed(2)}.`
    );
  }
}

trainTheTrainers([
  '3',

  'Arrays',

  '4.53',

  '5.23',

  '5.00',

  'Lists',

  '5.83',

  '6.00',

  '5.42',

  'Finish',
]);
