function trekkingMania(input) {
  let totalGroupClimbers = Number(input[0]);

  let totalClimbers = 0;
  let musalaClimbers = 0;
  let monblanClimbers = 0;
  let kilamandjaroClimbers = 0;
  let k2Climbers = 0;
  let everestClimbers = 0;

  for (let i = 1; i < input.length; i++) {
    totalClimbers += Number(input[i]);
    let self = Number(input[i]);
    if (self <= 5) {
      musalaClimbers += self;
    } else if (self >= 6 && self <= 12) {
      monblanClimbers += self;
    } else if (self >= 13 && self <= 25) {
      kilamandjaroClimbers += self;
    } else if (self >= 26 && self <= 40) {
      k2Climbers += self;
    } else if (self >= 41) {
      everestClimbers += self;
    }
  }
  let percentMusala = (musalaClimbers / totalClimbers) * 100;
  let percentMonban = (monblanClimbers / totalClimbers) * 100;
  let percentKilamandjaro =
    (kilamandjaroClimbers / totalClimbers) * 100;
  let percentK2 = (k2Climbers / totalClimbers) * 100;
  let percentEverest = (everestClimbers / totalClimbers) * 100;
  console.log(percentMusala.toFixed(2) + '%');
  console.log(percentMonban.toFixed(2) + '%');
  console.log(percentKilamandjaro.toFixed(2) + '%');
  console.log(percentK2.toFixed(2) + '%');
  console.log(percentEverest.toFixed(2) + '%');
}

trekkingMania(['5', '25', '41', '31', '250', '6']);
