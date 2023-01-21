function heroes() {
  const output = {};

  output.mage = (name) => {
    const mage = {
      name,
      health: 100,
      mana: 100,
    };

    mage.cast = (spellName) => {
      mage.mana -= 1;
      console.log(`${mage.name} cast ${spellName}`);
    };

    return mage;
  };

  output.fighter = (name) => {
    const fighter = {
      name,
      health: 100,
      stamina: 100,
    };

    fighter.fight = () => {
      fighter.stamina -= 1;
      console.log(`${fighter.name} slashes at the foe!`);
    };

    return fighter;
  };

  return output;
}

const create = heroes();

const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
