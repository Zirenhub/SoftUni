function carFactory(carObj) {
  const engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };

  let wheelSize = carObj.wheelsize;

  if (wheelSize % 2 === 0) {
    wheelSize--;
  }

  let engine;

  if (carObj.power <= 90) {
    engine = engines.small;
  } else if (carObj.power <= 120) {
    engine = engines.normal;
  } else {
    engine = engines.monster;
  }

  const output = {
    model: carObj.model,
    engine,
    carriage: { type: carObj.carriage, color: carObj.color },
    wheels: Array(4).fill(wheelSize),
  };

  return output;
}

console.table(
  carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14,
  })
);

console.table(
  carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17,
  })
);
