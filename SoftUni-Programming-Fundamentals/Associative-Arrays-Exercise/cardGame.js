function cardGame(arr) {
  const playersObj = {};

  arr.forEach((player) => {
    const [playerName, playerHand] = player.split(': ');
    const playerHandArr = playerHand.split(', ');

    if (!playersObj.hasOwnProperty(playerName)) {
      playersObj[playerName] = { totalVal: 0, cardsCollected: [] };
    }

    playerHandArr.forEach((card) => {
      if (playersObj[playerName].cardsCollected.includes(card)) {
        return;
      } else {
        playersObj[playerName].cardsCollected.push(card);
      }

      let type = card.slice(-1);
      let power = card.slice(0, -1);

      if (!isNaN(power)) {
        power = Number(power);
      } else {
        switch (power) {
          case 'J':
            power = 11;
            break;
          case 'Q':
            power = 12;
            break;
          case 'K':
            power = 13;
            break;
          case 'A':
            power = 14;
            break;
        }
      }
      switch (type) {
        case 'S':
          type = 4;
          break;
        case 'H':
          type = 3;
          break;
        case 'D':
          type = 2;
          break;
        case 'C':
          type = 1;
          break;
      }

      const cardValue = power * type;
      playersObj[playerName].totalVal += cardValue;
    });
  });

  const playersArr = Object.entries(playersObj);

  playersArr.forEach((player) => {
    console.log(`${player[0]}: ${player[1].totalVal}`);
  });
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',

  'Tomas: 3H, 10S, JC, KD, 5S, 10S',

  'Andrea: QH, QC, QS, QD',

  'Tomas: 6H, 7S, KC, KD, 5S, 10C',

  'Andrea: QH, QC, JS, JD, JC',

  'Peter: JD, JD, JD, JD, JD, JD',
]);
