function largestNumber(a, b, c) {
  // console.log(`The largest number is ${Math.max(a, b, c)}.`);
  let largest;
  if (a > b && a > c) {
    largest = a;
  } else if (b > c && b > c) {
    largest = b;
  } else {
    largest = c;
  }
  console.log(`The largest number is ${largest}.`);
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
