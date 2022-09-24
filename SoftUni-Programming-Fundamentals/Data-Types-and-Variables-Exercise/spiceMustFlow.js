function spiceMustFlow(num) {
  let yield = num;
  let yieldCollected = 0;
  let days = 0;

  while (yield >= 100) {
    days += 1;
    const extractedSpices = yield;
    const workersConsume = 26;
    yieldCollected += extractedSpices - workersConsume;

    yield -= 10;

    // console.log(yieldCollected);
    // console.log(yield);

    if (yield >= 26 && yield < 100) {
      yieldCollected += -workersConsume;
    }
  }
  console.log(`${days}`);
  console.log(`${yieldCollected}`);
}

spiceMustFlow(450);
