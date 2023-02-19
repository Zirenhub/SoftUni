function login(arr) {
  let username = arr[0];

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  for (let i = 1; i <= 4; i++) {
    if (reverseString(arr[i]) === username) {
      console.log(`User ${username} logged in.`);
      return;
    }
    if (i === 4) {
      console.log(`User ${username} blocked!`);
      return;
    }

    console.log('Incorrect password. Try again.');
  }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
