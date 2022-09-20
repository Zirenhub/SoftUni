function grandpaStavri(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let command = Number(input[index]);

  let currentDay = 1;
  let tempTotalRakija = 0;
  let tempTotalDegrees = 0;

  while (currentDay <= days) {
    let totalRakija = Number(input[index]); //100
    index++;
    let totalDegrees = totalRakija * Number(input[index]); //45
    index++;

    tempTotalRakija = tempTotalRakija + totalRakija;
    tempTotalDegrees = tempTotalDegrees + totalDegrees;
    currentDay++;
  }

  let total =
    tempTotalDegrees.toFixed(2) / tempTotalRakija.toFixed(2);

  console.log(`Liter: ${tempTotalRakija.toFixed(2)}`);
  console.log(`Degrees: ${total.toFixed(2)}`);
  if (total < 38) {
    console.log('Not good, you should baking!');
  } else if (total > 42) {
    console.log('Dilution with distilled water!');
  } else {
    console.log('Super!');
  }
}

grandpaStavri(['3', '100', '45', '50', '55', '150', '36']);
