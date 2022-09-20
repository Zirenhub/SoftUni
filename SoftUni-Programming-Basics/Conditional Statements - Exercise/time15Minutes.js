function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let clockHours = hours;
  let clockMinutes = minutes + 15; //61

  if (clockMinutes > 59) {
    clockMinutes = clockMinutes - 60;
    clockHours += 1;
  }

  if (clockHours > 23) {
    clockHours = 0;
  }

  if (clockMinutes < 10) {
    console.log(`${clockHours}:0${clockMinutes}`);
  } else {
    console.log(`${clockHours}:${clockMinutes}`);
  }
}

time(['1', '46']);
