function generateSequence(n, k) {
  let sequence = [1];
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let prevElements = sequence.slice(Math.max(0, i - k), i);
    for (let j = 0; j < prevElements.length; j++) {
      sum += prevElements[j];
    }
    sequence.push(sum);
  }
  return sequence;
}
console.log(generateSequence(6, 3));
