function dayOfWeek(num) {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  if (num < 0 || num > 7) {
    console.log('Invalid day!');
  } else {
    console.log(days[num - 1]);
  }
}

dayOfWeek(3);
