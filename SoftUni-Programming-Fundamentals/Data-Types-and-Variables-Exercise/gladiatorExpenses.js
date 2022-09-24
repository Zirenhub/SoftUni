function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let sum = 0;
  let shieldBroken = 0;

  for (let i = 0; i < lostFights; i += 1) {
    const lostGame = i + 1;

    if (lostGame % 2 === 0) {
      sum += helmetPrice;
    }
    if (lostGame % 3 === 0) {
      sum += swordPrice;
    }
    if (lostGame % 2 === 0 && lostGame % 3 === 0) {
      sum += shieldPrice;
      shieldBroken += 1;
      if (shieldBroken % 2 === 0) {
        sum += armorPrice;
      }
    }
  }
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(
  23,

  12.5,

  21.5,

  40,

  200
);
