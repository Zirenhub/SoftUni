const CubeModel = require('../models/Cube');
const createCubeOptions = require('../utils/createCubeOptions');
const getCube = require('../utils/getCube');

const getCubes = async (req, res) => {
  try {
    const { search, from, to } = req.query;
    const query = {};
    if (search) {
      query.name = { $regex: new RegExp(search, 'i') };
    }
    if (from || to) {
      query.difficultyLevel = {};
      if (from) {
        query.difficultyLevel.$gte = parseInt(from);
      }
      if (to) {
        query.difficultyLevel.$lte = parseInt(to);
      }
    }
    const cubes = await CubeModel.find(query).lean();
    res.render('index', { cubes, query: { search, from, to } });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const detailsCube = async (req, res, next) => {
  try {
    const cube = await CubeModel.findById(req.params.id)
      .populate('accessories')
      .lean();
    if (!cube) {
      throw new Error('Cube not found');
    }
    cube.isOwner = cube.owner.toString() === req.user._id;
    const hasAccessories = cube.accessories.length > 0;
    res.render('cube/details', { cube, hasAccessories });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const createCube = async (req, res) => {
  try {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    if (!name || !description || !imageUrl || !difficultyLevel) {
      throw new Error('All fields should be present');
    }
    const newCube = new CubeModel({
      name,
      description,
      imageUrl,
      difficultyLevel,
      owner: req.user._id,
    });
    await newCube.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getEditCube = async (req, res, next) => {
  try {
    const cube = await getCube(req);
    const options = createCubeOptions(cube.difficultyLevel);
    res.render('cube/edit', { cube, options });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const postEditCube = async (req, res, next) => {
  try {
    const cube = await getCube(req);
    const { name, description, imageUrl, difficultyLevel } = req.body;
    if (!name || !description || !imageUrl || !difficultyLevel) {
      throw new Error('All fields should be filled.');
    }
    cube.name = name;
    cube.description = description;
    cube.imageUrl = imageUrl;
    cube.difficultyLevel = difficultyLevel;

    await cube.save();

    res.redirect(`/cube/details/${req.params.id}`);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getDeleteCube = async (req, res, next) => {
  try {
    const cube = await getCube(req);
    const options = createCubeOptions(cube.difficultyLevel);
    res.render('cube/delete', { cube, options });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const postDeleteCube = async (req, res, next) => {
  try {
    await CubeModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getCubes,
  createCube,
  detailsCube,
  getEditCube,
  postEditCube,
  postDeleteCube,
  getDeleteCube,
};
