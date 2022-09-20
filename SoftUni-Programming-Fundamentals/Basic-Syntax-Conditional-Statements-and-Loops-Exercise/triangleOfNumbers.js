function triangleOfNumbers(num) {
  for (let i = 0; i <= num; i++) {
    let row = '';

    for (let a = 0; a < i; a++) {
      row += `${i} `;
    }

    console.log(row);
  }
}

triangleOfNumbers(3);
