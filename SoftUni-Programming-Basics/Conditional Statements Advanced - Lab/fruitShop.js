function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);

  let sum = 0;

  if (
    day === 'Monday' ||
    day === 'Tuesday' ||
    day === 'Wednesday' ||
    day === 'Thursday' ||
    day === 'Friday'
  ) {
    if (fruit === 'banana') {
      sum = quantity * 2.5;
      console.log(sum.toFixed(2));
    } else if (fruit === 'apple') {
      sum = quantity * 1.2;
      console.log(sum.toFixed(2));
    } else if (fruit === 'orange') {
      sum = quantity * 0.85;
      console.log(sum.toFixed(2));
    } else if (fruit === 'grapefruit') {
      sum = quantity * 1.45;
      console.log(sum.toFixed(2));
    } else if (fruit === 'kiwi') {
      sum = quantity * 2.7;
      console.log(sum.toFixed(2));
    } else if (fruit === 'pineapple') {
      sum = quantity * 5.5;
      console.log(sum.toFixed(2));
    } else if (fruit === 'grapes') {
      sum = quantity * 3.85;
      console.log(sum.toFixed(2));
    } else {
      console.log('error');
    }
  } else if (day === 'Saturday' || day === 'Sunday') {
    if (fruit === 'banana') {
      sum = quantity * 2.7;
      console.log(sum.toFixed(2));
    } else if (fruit === 'apple') {
      sum = quantity * 1.25;
      console.log(sum.toFixed(2));
    } else if (fruit === 'orange') {
      sum = quantity * 0.9;
      console.log(sum.toFixed(2));
    } else if (fruit === 'grapefruit') {
      sum = quantity * 1.6;
      console.log(sum.toFixed(2));
    } else if (fruit === 'kiwi') {
      sum = quantity * 3.0;
      console.log(sum.toFixed(2));
    } else if (fruit === 'pineapple') {
      sum = quantity * 5.6;
      console.log(sum.toFixed(2));
    } else if (fruit === 'grapes') {
      sum = quantity * 4.2;
      console.log(sum.toFixed(2));
    } else {
      console.log('error');
    }
  } else {
    console.log('error');
  }
}

fruitShop(['apple', 'Workday', '2']);
