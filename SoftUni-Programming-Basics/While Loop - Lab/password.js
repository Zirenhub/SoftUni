function password(input) {
  let index = 0;

  let userName = input[index];
  index++;
  let password = input[index];
  index++;

  while (input[index] !== password) {
    index++;
  }
  if (input[index] === password) {
    console.log(`Welcome ${userName}!`);
  }
}

password(['Nakov', '1234', 'Pass', '1324', '1234']);
