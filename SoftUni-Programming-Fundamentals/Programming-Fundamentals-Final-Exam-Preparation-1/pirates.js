function pirates(arr) {
  let command = arr.shift();
  const citiesVisited = {};

  while (command !== 'Sail') {
    let [cityName, population, gold] = command.split('||');
    population = Number(population);
    gold = Number(gold);

    if (!citiesVisited.hasOwnProperty(cityName)) {
      citiesVisited[cityName] = { population: population, gold: gold };
    } else {
      citiesVisited[cityName].population += population;
      citiesVisited[cityName].gold += gold;
    }

    command = arr.shift();
  }

  // skip sail
  command = arr.shift();

  while (command !== 'End') {
    const currentEvent = command.split('=>');
    const currentTask = currentEvent[0];

    if (currentTask === 'Plunder') {
      const town = currentEvent[1];
      const people = Number(currentEvent[2]);
      const gold = Number(currentEvent[3]);

      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );

      citiesVisited[town].population -= people;
      citiesVisited[town].gold -= gold;

      if (
        citiesVisited[town].population <= 0 ||
        citiesVisited[town].gold <= 0
      ) {
        delete citiesVisited[town];
        console.log(`${town} has been wiped off the map!`);
      }
    }

    if (currentTask === 'Prosper') {
      const town = currentEvent[1];
      const gold = Number(currentEvent[2]);

      if (gold < 0) {
        console.log('Gold added cannot be a negative number!');
      } else {
        citiesVisited[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${citiesVisited[town].gold} gold.`
        );
      }
    }

    command = arr.shift();
  }

  const cities = Object.entries(citiesVisited);

  if (cities.length) {
    console.log(
      `Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`
    );

    cities.forEach((city) => {
      const [cityName, cityInfo] = city;

      console.log(
        `${cityName} -> Population: ${cityInfo.population} citizens, Gold: ${cityInfo.gold} kg`
      );
    });
  } else if (cities.length === 0) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  }
}

pirates([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
