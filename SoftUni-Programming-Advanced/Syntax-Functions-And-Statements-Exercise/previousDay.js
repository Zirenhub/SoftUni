function previousDay(year, month, day) {
  const date = new Date(year, month - 1, day - 1);
  const getYear = date.getFullYear();
  const getMonth = date.getMonth() + 1;
  const getDay = date.getDate();

  console.log(`${getYear}-${getMonth}-${getDay}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
