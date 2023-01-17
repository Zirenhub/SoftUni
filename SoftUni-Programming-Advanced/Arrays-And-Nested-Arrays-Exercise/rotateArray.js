function rotateArray(arr, num) {
  const output = [...arr];

  for (let i = 0; i < num; i++) {
    const lastElement = output.pop();
    output.unshift(lastElement);
  }

  return output.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15));
