function nxnMatrix(num) {
  for (let i = 0; i < num; i++) {
    let output = '';

    for (let b = 0; b < num; b++) {
      output += `${num} `;
    }
    console.log(output);
  }
}

nxnMatrix(3);
