function sameNumbers(num) {
  const nums = num
    .toString()
    .split('')
    .map((num) => Number(num));
  const allSame = nums.every((num) => num === nums[0]);
  const sum = nums.reduce((acc, current) => acc + current, 0);

  console.log(allSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
