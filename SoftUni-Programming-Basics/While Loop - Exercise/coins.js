function coins(input) {
  let change = Number(input[0]);

  let returnChange = change;
  let sum = 0;
  let totalCents = 0;

  while (returnChange > 0) {
    returnChange = returnChange.toFixed(2);
    if (returnChange >= 2.0) {
      sum = returnChange % 2;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 1.0) {
      sum = returnChange % 1.0;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 0.5) {
      sum = returnChange % 0.5;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 0.2) {
      sum = returnChange % 0.2;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 0.1) {
      sum = returnChange % 0.1;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 0.05) {
      sum = returnChange % 0.05;
      returnChange = sum;
      totalCents++;
    } else if (returnChange >= 0.02) {
      sum = returnChange % 0.02;
      returnChange = sum;
      totalCents++;
      if (sum === 0) {
        totalCents++;
      }
    } else if (returnChange >= 0.01) {
      sum = returnChange % 0.01;
      returnChange = sum;
      totalCents++;
    }
  }

  console.log(totalCents);
}

coins(['0.59']);
