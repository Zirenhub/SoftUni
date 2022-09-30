function reverseInPlace(arr) {
  const array = arr;
  array.reverse();

  let result = '';

  array.forEach((element) => {
    result += `${element} `;
  });

  console.log(result);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
