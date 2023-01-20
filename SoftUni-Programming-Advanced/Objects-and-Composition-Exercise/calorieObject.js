function calorieObject(arr) {
  const output = {};

  for (let i = 0; i < arr.length; i += 2) {
    output[arr[i]] = Number(arr[i + 1]);
  }

  console.log(output);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
