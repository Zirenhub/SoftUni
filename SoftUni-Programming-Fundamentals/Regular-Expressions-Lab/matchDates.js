function matchDates(arr) {
  const pattern =
    /\b(?<day>\d{2})([.\-/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})/g;

  const dates = arr.shift();

  const matches = [...dates.matchAll(pattern)];

  matches.forEach((match) => {
    console.log(
      `Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`
    );
  });
}

matchDates([
  '13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016',
]);
