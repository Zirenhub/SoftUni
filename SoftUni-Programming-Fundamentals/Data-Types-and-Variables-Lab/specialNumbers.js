function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    const stringNum = i.toString();

    for (let j = 0; j < stringNum.length; j++) {
      sum += Number(stringNum[j]);
    }

    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(20);
