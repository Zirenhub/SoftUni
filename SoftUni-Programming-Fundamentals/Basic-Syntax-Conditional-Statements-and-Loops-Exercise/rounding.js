function rounding(num, prec) {
  if (prec > 15) {
    prec = 15;
  }
  console.log(`${parseFloat(num.toFixed(prec))}`);
}

rounding(3.1415926535897932384626433832795, 2);
