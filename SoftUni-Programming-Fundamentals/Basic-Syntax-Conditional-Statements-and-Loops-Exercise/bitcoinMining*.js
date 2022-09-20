function bitcoinMining(arr) {
  const oneGramOfGold = 67.51;
  const oneBitcoin = 11949.16;

  let array = arr;
  let money = 0;
  let bitcoins = 0;
  let firstDayBought = 0;
  let day = 1;

  for (let i = 0; i < array.length; i += 1) {
    let goldMined = array[i];

    if (day % 3 === 0) {
      goldMined -= goldMined * 0.3;
    }

    const rate = goldMined * oneGramOfGold;
    money += rate;

    while (money - oneBitcoin >= 0) {
      bitcoins += 1;
      money -= oneBitcoin;
      if (firstDayBought === 0) {
        firstDayBought = i + 1;
      }
    }

    day += 1;
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (firstDayBought !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBought}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);
