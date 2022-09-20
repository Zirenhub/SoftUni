function skiTrip(input) {
  let stayIns = Number(input[0]) - 1;
  let placeToStay = input[1];
  let rating = input[2];

  let sum = 0;
  if (placeToStay === 'apartment') {
    sum = stayIns * 25.0;
    if (stayIns < 10) {
      sum = sum - sum * 0.3;
    } else if (stayIns >= 10 && stayIns <= 15) {
      sum = sum - sum * 0.35;
    } else {
      sum = sum - sum * 0.5;
    }
    if (rating === 'positive') {
      sum = sum + sum * 0.25;
    } else if (rating === 'negative') {
      sum = sum - sum * 0.1;
    }
  } else if (placeToStay === 'president apartment') {
    sum = stayIns * 35.0;
    if (stayIns < 10) {
      sum = sum - sum * 0.1;
    } else if (stayIns >= 10 && stayIns <= 15) {
      sum = sum - sum * 0.15;
    } else {
      sum = sum - sum * 0.2;
    }
    if (rating === 'positive') {
      sum = sum + sum * 0.25;
    } else if (rating === 'negative') {
      sum = sum - sum * 0.1;
    }
  } else if (placeToStay === 'room for one person') {
    sum = stayIns * 18.0;
    if (rating === 'positive') {
      sum = sum + sum * 0.25;
    } else if (rating === 'negative') {
      sum = sum - sum * 0.1;
    }
  }
  console.log(sum.toFixed(2));
}

skiTrip(['2', 'apartment', 'positive']);
