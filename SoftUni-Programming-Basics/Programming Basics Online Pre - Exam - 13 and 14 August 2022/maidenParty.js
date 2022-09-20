function maidenParty(input) {
  let lovePoslanie = 0.6;
  let rose = 7.2;
  let keyChain = 3.6;
  let comic = 18.2;
  let luckySupraise = 22;

  let partyCost = Number(input[0]);
  let totalLovePoslanie = Number(input[1]);
  let totalRose = Number(input[2]);
  let totalKeyChain = Number(input[3]);
  let totalComic = Number(input[4]);
  let totalLucky = Number(input[5]);

  let total =
    totalLovePoslanie * lovePoslanie +
    totalRose * rose +
    totalKeyChain * keyChain +
    totalComic * comic +
    totalLucky * luckySupraise;

  let totalArticules =
    totalLovePoslanie +
    totalRose +
    totalKeyChain +
    totalComic +
    totalLucky;

  if (totalArticules > 25) {
    total = total - total * 0.35;
  }
  let sumTotal = total - total * 0.1;

  if (sumTotal > partyCost) {
    let sumSum = sumTotal - partyCost;
    console.log(`Yes! ${sumSum.toFixed(2)} lv left.`);
  } else {
    let needed = partyCost - sumTotal;
    console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`);
  }
}

maidenParty(['320', '8', '2', '5', '5', '1']);
