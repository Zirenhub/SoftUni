function sortAnArrayBy2Criteria(arr) {
  console.log(
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')
  );
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gammma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);
