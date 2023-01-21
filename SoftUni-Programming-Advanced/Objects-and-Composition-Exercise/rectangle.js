function rectangle(width, height, color) {
  const output = {
    width,
    height,
    color: `${color[0].toUpperCase()}${color.substring(1, color.length)}`,
  };

  output.calcArea = () => {
    return output.width * output.height;
  };

  return output;
}

const rec = rectangle(4, 5, 'red');

console.log(rec.width);
console.log(rec.height);
console.log(rec.color);
console.log(rec.calcArea());
