function requiredReading(pages, pagesRead, days) {
  const totalTimeToRead = pages / pagesRead;

  const requiredPerDay = totalTimeToRead / days;

  console.log(requiredPerDay);
}

requiredReading(212, 20, 2);
