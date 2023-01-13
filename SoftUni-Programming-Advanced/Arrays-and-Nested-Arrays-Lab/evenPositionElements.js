function evenPositionElements(arr) {
  const even = [];

  arr.forEach((el, index) => {
    if (index % 2 === 0) {
      even.push(el);
    }
  });

  console.log(even.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
