function centuriesToMinutes(num) {
  const years = num * 100;
  const days = Math.trunc(years * 365.2422);
  const hours = 24 * days;
  const minutes = hours * 60;

  console.log(
    `${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes `
  );
}

centuriesToMinutes(1);
