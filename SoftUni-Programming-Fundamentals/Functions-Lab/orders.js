function orders(string, num) {
  if (string === 'coffee') {
    console.log(`${(num * 1.5).toFixed(2)}`);
  } else if (string === 'water') {
    console.log(`${(num * 1.0).toFixed(2)}`);
  } else if (string === 'coke') {
    console.log(`${(num * 1.4).toFixed(2)}`);
  } else if (string === 'snacks') {
    console.log(`${(num * 2.0).toFixed(2)}`);
  }
}

orders('coffee', 2);
