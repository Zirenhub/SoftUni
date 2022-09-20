function vacation(numPeople, groupType, dayOfWeek) {
  let total = 0;

  if (groupType === 'Business' && numPeople >= 100) {
    numPeople -= 10;
  }

  if (dayOfWeek === 'Friday') {
    if (groupType === 'Students') {
      total = numPeople * 8.45;
    } else if (groupType === 'Business') {
      total = numPeople * 10.9;
    } else if (groupType === 'Regular') {
      total = numPeople * 15;
    }
  } else if (dayOfWeek === 'Saturday') {
    if (groupType === 'Students') {
      total = numPeople * 9.8;
    } else if (groupType === 'Business') {
      total = numPeople * 15.6;
    } else if (groupType === 'Regular') {
      total = numPeople * 20;
    }
  } else if (dayOfWeek === 'Sunday') {
    if (groupType === 'Students') {
      total = numPeople * 10.46;
    } else if (groupType === 'Business') {
      total = numPeople * 16;
    } else if (groupType === 'Regular') {
      total = numPeople * 22.5;
    }
  }

  if (groupType === 'Students' && numPeople >= 30) {
    total = total - total * 0.15;
  }
  if (groupType === 'Regular' && numPeople >= 10 && numPeople <= 20) {
    total = total - total * 0.05;
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(
  100,

  'Business',

  'Sunday'
);
