function race(riceData) {
  const participants = riceData.shift().split(', ');

  const namePattern = /[A-Z-a-z]+/g;
  const distancePattern = /[\d]/g;

  let index = 0;

  const racersObj = {};

  while (riceData[index] !== 'end of race') {
    const name = riceData[index].match(namePattern).join('');

    if (participants.includes(name)) {
      const distance = riceData[index]
        .match(distancePattern)
        .map(Number)
        .reduce((acc, currentVal) => acc + currentVal, 0);

      if (!racersObj.hasOwnProperty(name)) {
        racersObj[name] = distance;
      } else {
        racersObj[name] += distance;
      }
    }
    index++;
  }

  const sortedRacers = Object.entries(racersObj).sort((a, b) => b[1] - a[1]);

  const [firstPlace, secondPlace, thirdPlace] = sortedRacers;

  console.log(`1st place: ${firstPlace[0]}`);
  console.log(`2nd place: ${secondPlace[0]}`);
  console.log(`3rd place: ${thirdPlace[0]}`);
}

race([
  'George, Peter, Bill, Tom',

  'G4e@55or%6g6!68e!!@ ',

  'R1@!3a$y4456@',

  'B5@i@#123ll',

  'G@e54o$r6ge#',

  '7P%et^#e5346r',

  'T$o553m&6',

  'end of race',
]);
