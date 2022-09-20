function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination = '';
  let holiday = '';
  let total = 0;

  if (budget <= 100) {
    destination = 'Bulgaria';
    if (season === 'summer') {
      holiday = 'Camp';
      total = budget * 0.3;
    } else if (season === 'winter') {
      total = budget * 0.7;
      holiday = 'Hotel';
    }
  } else if (budget <= 1000) {
    destination = 'Balkans';
    if (season === 'summer') {
      total = budget * 0.4;
      holiday = 'Camp';
    } else if (season === 'winter') {
      total = budget * 0.8;
      holiday = 'Hotel';
    }
  } else {
    destination = 'Europe';
    total = budget * 0.9;
    holiday = 'Hotel';
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${holiday} - ${total.toFixed(2)}`);
}

journey(['1500', 'summer']);
