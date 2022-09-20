function sequence2kplus1(input) {
  let index = 0;

  let number = Number(input[index]);
  let temp = 1;
  while (temp <= number) {
    if (temp > number) {
      break;
    }
    console.log(temp);
    temp = temp * 2 + 1;
  }
}

sequence2kplus1(['8']);
