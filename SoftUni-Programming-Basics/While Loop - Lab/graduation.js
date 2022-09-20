function graduation(input) {
  let index = 0;
  let name = input[index];
  index++;

  let grade = 1;
  let badScore = 0;
  let sum = 0;

  while (grade <= 12) {
    let score = Number(input[index]);
    index++;
    if (score < 4.0) {
      badScore++;
      if (badScore > 1) {
        console.log(
          `${name} has been excluded at ${grade - 1} grade`
        );
        break;
      }
    }
    sum = sum + +score;
    grade++;
  }
  if (badScore < 2) {
    let sumToFixed = sum / 12;
    console.log(
      `${name} graduated. Average grade: ${sumToFixed.toFixed(2)}`
    );
  }
}

graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3']);
