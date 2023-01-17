function printEveryNthElementFromAnArray(arr, num) {
  const output = [];

  for (let i = 0; i < arr.length; i += num) {
    output.push(arr[i]);
  }

  return output;
}

console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2));
console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6));
