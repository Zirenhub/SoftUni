function histogram(input) {
  let n = Number(input[0]);
  let group200 = 0;
  let group400 = 0;
  let group600 = 0;
  let group800 = 0;
  let group800plus = 0;
  for (let i = 1; i <= n; i++) {
    let number = Number(input[i]);
    if (number < 200) {
      group200 += 1;
    } else if (number < 400) {
      group400 += 1;
    } else if (number < 600) {
      group600 += 1;
    } else if (number < 800) {
      group800 += 1;
    } else {
      group800plus += 1;
    }
  }
  let group200percent = (group200 / n) * 100;
  let group400percent = (group400 / n) * 100;
  let group600percent = (group600 / n) * 100;
  let group800percent = (group800 / n) * 100;
  let group800plusPercent = (group800plus / n) * 100;
  console.log(group200percent.toFixed(2) + '%');
  console.log(group400percent.toFixed(2) + '%');
  console.log(group600percent.toFixed(2) + '%');
  console.log(group800percent.toFixed(2) + '%');
  console.log(group800plusPercent.toFixed(2) + '%');
}

histogram(['3', '1', '2', '999']);
