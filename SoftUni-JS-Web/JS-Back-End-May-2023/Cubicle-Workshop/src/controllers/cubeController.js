const CubeModel = require('../models/Cube');

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
    console.err(err);
  }
};

const detailsCube = async (req, res) => {
  const cube = await CubeModel.findById(req.params.id);
  if (cube) {
    res.render('details', cube);
  } else {
    next();
  }
};

const createCube = async (req, res) => {
  try {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    if (!name || !description || !imageUrl || !difficultyLevel) {
      res.end('All fields should be present');
      // or "next();" for a 404 page.
    }
    const newCube = new CubeModel({
      name,
      description,
      imageUrl,
      difficultyLevel,
    });
    await newCube.save();
    res.redirect('/');
  } catch (err) {
    console.err(err);
  }
};

module.exports = {
  getCubes,
  createCube,
  detailsCube,
};
