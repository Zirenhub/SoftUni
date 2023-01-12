function cookingByNumbers(...params) {
  const num = Number(params.shift());
  let output = num;

  const commands = {
    chop(num) {
      return num / 2;
    },
    dice(num) {
      return Math.sqrt(num);
    },
    spice(num) {
      return num + 1;
    },
    bake(num) {
      return num * 3;
    },
    fillet(num) {
      return num - num * (20 / 100);
    },
  };

  params.forEach((command) => {
    const newVal = commands[command](output);
    output = newVal;
    console.log(output);
  });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
