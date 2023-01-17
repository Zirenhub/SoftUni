function printAnArrayWithAGivenDelimiter(arr, delimiter) {
  return console.log(`${arr.join(delimiter)}`);
}

printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArrayWithAGivenDelimiter(
  ['How about no?', 'I', 'will', 'not', 'do', 'it!'],
  '_'
);
