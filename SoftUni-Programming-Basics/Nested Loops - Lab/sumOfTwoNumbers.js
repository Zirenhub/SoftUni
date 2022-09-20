function sumOfTwoNumbers(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);
  let magicNumber = Number(input[2]);

  let goal = magicNumber;

  let comb = 0;

  for (let a = start; a <= end; a++) {
    for (let i = start; i <= end; i++) {
      //   console.log(`${a} and ${i}`);
      let res = a + i;
      comb++;
      if (res === magicNumber) {
        console.log(`Combination N:${comb} (${a} + ${i} = ${res})`);
        return;
      }
    }
  }
  console.log(`${comb} combinations - neither equals ${magicNumber}`);
}

sumOfTwoNumbers(['23', '24', '20']);
