function aMinerTask(arr) {
  const resourcesInfo = {};

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      const currentResource = arr[i++];
      const currentQuantity = Number(arr[i]);
      if (!resourcesInfo[currentResource]) {
        resourcesInfo[currentResource] = currentQuantity;
      } else {
        resourcesInfo[currentResource] += currentQuantity;
      }
    }
  }

  const resourcesArr = Object.entries(resourcesInfo);

  resourcesArr.forEach((resource) => {
    console.log(`${resource[0]} -> ${resource[1]}`);
  });
}

aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
