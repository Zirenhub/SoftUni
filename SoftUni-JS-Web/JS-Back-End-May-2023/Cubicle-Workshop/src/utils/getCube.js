const CubeModel = require('../models/Cube');

const getCube = async (req) => {
  const cubeId = req.params.id;
  const cube = await CubeModel.findById(cubeId).lean();
  if (!cube) {
    throw new Error('Cube not found');
  }
  if (cube.owner.toString() !== req.user._id) {
    throw new Error('Unauthorized');
  }
  return cube;
};

module.exports = getCube;
