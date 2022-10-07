function passwordValidator(pass) {
  const passwordLength = pass.length;
  let digitsInPass = 0;

  const onlyLettersAndNumbers = (str) => {
    return /^[A-Za-z0-9]*$/.test(str);
  };

  if (passwordLength < 6 || passwordLength > 10) {
    console.log('Password must be between 6 and 10 characters');
  }
  for (let i = 0; i < passwordLength; i++) {
    const toChar = pass[i].charCodeAt(0);

    if (toChar >= 48 && toChar <= 57) {
      digitsInPass += 1;
    }
  }
  if (!onlyLettersAndNumbers(pass)) {
    console.log('Password must consist only of letters and digits');
  }
  if (digitsInPass < 2) {
    console.log('Password must have at least 2 digits');
  }

  if (
    onlyLettersAndNumbers(pass) &&
    digitsInPass >= 2 &&
    (passwordLength >= 6 || passwordLength <= 10)
  ) {
    console.log('Password is valid');
  }
}

passwordValidator('MyPass123');
