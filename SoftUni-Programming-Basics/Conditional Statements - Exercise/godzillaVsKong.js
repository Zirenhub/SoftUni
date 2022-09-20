function godzillaVsKong(input) {
  let budgetForMovie = Number(input[0]);
  let numberOfExtras = Number(input[1]);
  let priceForClothing = Number(input[2]);

  let decor = budgetForMovie * 0.1;
  let totalPriceForClothing = numberOfExtras * priceForClothing;

  if (numberOfExtras >= 150) {
    totalPriceForClothing += -totalPriceForClothing * 0.1;
  }

  let movieCost = decor + totalPriceForClothing;

  if (movieCost > budgetForMovie) {
    console.log('Not enough money!');
    let budgetNeeded = movieCost - budgetForMovie;
    console.log(`Wingard needs ${budgetNeeded.toFixed(2)} leva more.`);
    return;
  }
  if (decor <= movieCost) {
    if (totalPriceForClothing <= movieCost) {
      if (numberOfExtras >= 150) {
        console.log('Action!');
        let totalBuget = budgetForMovie - (decor + totalPriceForClothing);
        console.log(`Wingard starts filming with ${totalBuget.toFixed(2)} leva left.`);
        return;
      }
      console.log('Action!');
      let budgetLeft = budgetForMovie - movieCost;
      console.log(`Wingard starts filming with ${budgetLeft.toFixed(2)} leva left.` );
    }
  }
}

godzillaVsKong(['20000', '120', '55.5']);
