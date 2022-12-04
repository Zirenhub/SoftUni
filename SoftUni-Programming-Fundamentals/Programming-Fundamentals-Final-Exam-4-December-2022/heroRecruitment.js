function heroRecruitment(arr) {
  let currentLine = arr.shift();
  const heroes = {};

  while (currentLine !== 'End') {
    const arguments = currentLine.split(' ');
    const task = arguments[0];

    if (task === 'Enroll') {
      const heroName = arguments[1];

      if (heroes.hasOwnProperty(heroName)) {
        console.log(`${heroName} is already enrolled.`);
      } else {
        heroes[heroName] = [];
      }
    }

    if (task === 'Learn') {
      const heroName = arguments[1];
      const spellName = arguments[2];

      if (!heroes.hasOwnProperty(heroName)) {
        console.log(`${heroName} doesn't exist.`);
        currentLine = arr.shift();
        continue;
      }

      if (heroes[heroName].includes(spellName)) {
        console.log(`${heroName} has already learnt ${spellName}.`);
        currentLine = arr.shift();
        continue;
      }

      heroes[heroName].push(spellName);
    }

    if (task === 'Unlearn') {
      const heroName = arguments[1];
      const spellName = arguments[2];

      if (!heroes.hasOwnProperty(heroName)) {
        console.log(`${heroName} doesn't exist.`);
        currentLine = arr.shift();
        continue;
      }

      if (!heroes[heroName].includes(spellName)) {
        console.log(`${heroName} doesn't know ${spellName}.`);
        currentLine = arr.shift();
        continue;
      }

      const indexOfSpell = heroes[heroName].indexOf(spellName);

      heroes[heroName].splice(indexOfSpell, 1);
    }

    currentLine = arr.shift();
  }

  console.log('Heroes:');
  const heroesArr = Object.entries(heroes);

  heroesArr.forEach((hero) => {
    const heroName = hero[0];
    const spellBook = hero[1];
    const spellBookLength = spellBook.length;
    let output = `== ${heroName}: `;

    spellBook.forEach((spell, index) => {
      if (spellBookLength - 1 === index) {
        output += `${spell}`;
      } else {
        output += `${spell}, `;
      }
    });
    console.log(output);
  });
}

heroRecruitment([
  'Enroll Stefan',
  'Enroll Peter',
  'Enroll Stefan',
  'Learn Stefan ItShouldWork',
  'Learn Stefan ItShouldWork2',
  'Learn Stefan ItShouldWork3',
  'Learn John ItShouldNotWork',
  'Unlearn George Dispel',
  'Unlearn Stefan ItShouldWork3',
  'End',
]);
console.log('----------------------------');
heroRecruitment([
  'Enroll Stefan',
  'Learn Stefan ItShouldWork',
  'Learn Stefan ItShouldWork',
  'Unlearn Stefan NotFound',
  'End',
]);
console.log('----------------------------');
heroRecruitment([
  'Enroll Stefan',
  'Enroll Peter',
  'Enroll John',
  'Learn Stefan Spell',
  'Learn Peter Dispel',
  'End',
]);
