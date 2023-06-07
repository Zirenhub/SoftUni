const mongoose = require('mongoose');
const AccessoryModel = require('../models/Accessory');
const CubeModel = require('../models/Cube');
const getCube = require('../utils/getCube');

const createAccessory = async (req, res, next) => {
  try {
    const { name, description, imageUrl } = req.body;
    if (!name || !description || !imageUrl) {
      throw new Error('All fields should be filled.');
    }
    const newAccessory = new AccessoryModel({ name, description, imageUrl });
    await newAccessory.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAttachAccessory = async (req, res, next) => {
  try {
    const cube = await getCube(req);
    const accessories = await AccessoryModel.find({
      _id: { $nin: cube.accessories },
    }).lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const postAttachAccessory = async (req, res, next) => {
  try {
    const { accessory } = req.body;
    const cube = await getCube(req);
    // validate that the accessory isnt attach in the first place.
    const accessoryObjectId = new mongoose.Types.ObjectId(accessory.trim());
    cube.accessories.push(accessoryObjectId);
    await cube.save();
    res.redirect(`/cube/details/${cubeId}`);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getAttachAccessory,
  postAttachAccessory,
  createAccessory,
};
