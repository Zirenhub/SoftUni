function palindromeIntegers(arr) {
  arr.forEach((element) => {
    let reversed = element.toString().split('').reverse().join('');
    reversed = Number(reversed);

    if (element === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  });
}

palindromeIntegers([123, 323, 421, 121]);
