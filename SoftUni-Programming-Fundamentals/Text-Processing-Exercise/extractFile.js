function extractFile(path) {
  const pathArr = path.split('\\');

  const lastElement = pathArr.pop();
  const indexOfDot = lastElement.lastIndexOf('.');

  const fileName = lastElement.substring(0, indexOfDot);
  const fileExtension = lastElement.substring(indexOfDot + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
