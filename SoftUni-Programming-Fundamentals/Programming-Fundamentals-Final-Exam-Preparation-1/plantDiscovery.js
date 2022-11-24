function plantDiscovery(plantsArr) {
  let numPlantsToRecieve = plantsArr.shift();

  const plants = {};

  let currentLine = plantsArr.shift();
  while (numPlantsToRecieve--) {
    const currentPlant = currentLine.split('<->');
    const plantName = currentPlant[0];
    const plantRarity = Number(currentPlant[1]);

    if (!plants.hasOwnProperty(plantName)) {
      plants[plantName] = {
        rating: [],
        rarity: plantRarity,
      };
    } else {
      plants[plantName].rarity += plantRarity;
    }

    currentLine = plantsArr.shift();
  }

  while (currentLine !== 'Exhibition') {
    const arguments = currentLine.split(': ');
    const task = arguments[0];
    const taskArgs = arguments[1].split(' - ');

    const plant = taskArgs[0];

    if (!plants[plant]) {
      console.log('error');
      currentLine = plantsArr.shift();

      continue;
    }

    if (task === 'Rate') {
      const rating = Number(taskArgs[1]);

      plants[plant].rating.push(rating);
    }
    if (task === 'Update') {
      const newRarity = Number(taskArgs[1]);

      plants[plant].rarity = newRarity;
    }
    if (task === 'Reset') {
      plants[plant].rating = [];
    }

    currentLine = plantsArr.shift();
  }

  const plantsOutput = Object.entries(plants);

  console.log('Plants for the exhibition:');

  plantsOutput.forEach((plant) => {
    const plantName = plant[0];

    const plantRarity = plant[1].rarity;
    const plantRating = plant[1].rating;

    let averageRating =
      plantRating.reduce((acc, cur) => acc + cur, 0) / plantRating.length;

    if (isNaN(averageRating)) {
      averageRating = 0;
    }

    console.log(
      `- ${plantName}; Rarity: ${plantRarity}; Rating: ${averageRating.toFixed(
        2
      )}`
    );
  });
}

plantDiscovery([
  '3',
  'Arnoldii<->4',
  'Woodii<->7',
  'Welwitschia<->2',
  'Rate: Woodii - 10',
  'Rate: Welwitschia - 7',
  'Rate: Arnoldii - 3',
  'Rate: Woodii - 5',
  'Update: Woodii - 5',
  'Update: Wooddsadii - 5',
  'Reset: Arnoldii',
  'Exhibition',
]);
