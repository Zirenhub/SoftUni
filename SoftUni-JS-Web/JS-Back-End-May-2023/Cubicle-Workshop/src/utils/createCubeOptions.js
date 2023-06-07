const createCubeOptions = (cubeDifficulty) => {
  const levels = [
    'Very Easy',
    'Easy',
    'Medium (Standard 3x3)',
    'Intermediate',
    'Expert',
    'Hardcore',
  ];

  const options = levels.map((l, i) => {
    return {
      title: `${i + 1} - ${l}`,
      value: i + 1,
      selected: Number(cubeDifficulty) === i + 1,
    };
  });

  return options;
};

module.exports = createCubeOptions;
