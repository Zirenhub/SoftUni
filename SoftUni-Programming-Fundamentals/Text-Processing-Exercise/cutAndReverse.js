function cutAndReverse(string) {
  const stringArr = string.split('').reverse().join('');
  const middle = stringArr.length / 2;

  const firstHalf = stringArr.substring(0, middle);
  const secondHalf = stringArr.substring(middle);

  console.log(secondHalf);
  console.log(firstHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
