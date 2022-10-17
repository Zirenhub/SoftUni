function blackFlag(arr) {
  let lasting = Number(arr[0]);
  const plunderPerDay = Number(arr[1]);
  const expectedPlunder = Number(arr[2]);

  let totalPlunder = 0;
  let days = 0;

  while (days < lasting) {
    days += 1;
    totalPlunder += plunderPerDay;

    if (days % 3 === 0) {
      totalPlunder += plunderPerDay * 0.5;
    }
    if (days % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    const percentageLeft = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
  }
}

blackFlag(['5', '40', '100']);
blackFlag(['10', '20', '380']);
