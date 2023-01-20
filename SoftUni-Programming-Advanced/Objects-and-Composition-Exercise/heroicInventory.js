function heroicInventory(arr) {
  const output = [];

  arr.forEach((hero) => {
    const [name, level, items] = hero.split(' / ');
    output.push({
      name,
      level: Number(level),
      items: items ? items.split(', ') : [],
    });
  });

  return JSON.stringify(output);
}

console.log(
  heroicInventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
  ])
);

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']));
