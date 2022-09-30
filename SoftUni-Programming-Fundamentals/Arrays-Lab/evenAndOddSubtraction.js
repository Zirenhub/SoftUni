function evenAndOddSubtraction(arr) {
  let evenNumbers = 0;
  let oddNumbers = 0;

  arr.forEach((element) => {
    if (element % 2 === 0) {
      evenNumbers += element;
    } else {
      oddNumbers += element;
    }
  });

  console.log(evenNumbers - oddNumbers);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
