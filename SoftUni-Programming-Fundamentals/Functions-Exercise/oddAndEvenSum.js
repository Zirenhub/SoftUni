function oddAndEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;

  const stringFromNum = num.toString();
  const stringLength = stringFromNum.length;

  for (let i = 0; i < stringLength; i++) {
    const currentNum = Number(stringFromNum[i]);

    if (currentNum % 2 === 0) {
      evenSum += currentNum;
    } else {
      oddSum += currentNum;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234);
