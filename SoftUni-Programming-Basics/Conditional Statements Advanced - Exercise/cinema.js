function cinema(input) {
  let projection = input[0];
  let rows = Number(input[1]);
  let cols = Number(input[2]);

  let total = rows * cols;
  let income = 0;

  if (projection === 'Premiere') {
    income = total * 12;
  } else if (projection === 'Normal') {
    income = total * 7.5;
  } else if (projection === 'Discount') {
    income = total * 5;
  }
  console.log(income.toFixed(2));
}

cinema(['Normal', '21', '13']);
