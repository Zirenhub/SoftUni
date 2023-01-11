function stringLength(a, b, c) {
  const sum = `${a}${b}${c}`;
  console.log(sum.length);
  const average = sum.length / 3;
  console.log(Math.round(average));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
