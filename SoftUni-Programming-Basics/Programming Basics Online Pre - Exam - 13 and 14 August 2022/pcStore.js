function pcStore(input) {
  let cpuDolarPrice = Number(input[0]);
  let gpuDolarPrice = Number(input[1]);
  let singeRamDolarPrice = Number(input[2]);
  let totalRam = Number(input[3]);
  let percentDiscount = Number(input[4]);

  let dolarToBgn = 1.57;

  let cpuPrice = cpuDolarPrice * dolarToBgn;
  let gpuPrice = gpuDolarPrice * dolarToBgn;
  let singeRamPrice = singeRamDolarPrice * dolarToBgn;
  let totalRamPrice = singeRamPrice * totalRam;
  let cpuDiscountPrice = cpuPrice - cpuPrice * percentDiscount;
  let gpuDiscountPrice = gpuPrice - gpuPrice * percentDiscount;

  let total = cpuDiscountPrice + gpuDiscountPrice + totalRamPrice;
  console.log(`Money needed - ${total.toFixed(2)} leva.`);
}
pcStore(['500', '200', '80', '2', '0.05']);
