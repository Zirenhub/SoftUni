function loadingBar(percent) {
  const getFirstNum = String(percent).charAt(0);

  const num = Number(getFirstNum);

  if (percent === 100) {
    console.log('100% Complete!');
  } else {
    let percentOutput = '';
    let dotOutput = '..........';

    for (let i = 0; i < num; i++) {
      percentOutput += '%';
    }

    let tempNum = num;

    while (tempNum !== 0) {
      dotOutput = dotOutput.slice(0, -1);
      tempNum -= 1;
    }

    console.log(`${percent}% [${percentOutput}${dotOutput}]`);
    console.log('Still loading...');
  }
}

loadingBar(30);
