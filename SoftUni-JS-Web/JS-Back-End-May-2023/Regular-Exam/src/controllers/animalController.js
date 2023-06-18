const express = require('express');
const { isAuth } = require('../middlewares/authMiddleware');
const {
  getAnimal,
  donateAnimal,
  deleteAnimal,
  editAnimal,
} = require('../managers/animalManager');
const { errorHandler } = require('../util/errorHandler');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const animalID = req.params.id;
    const animal = await getAnimal(animalID);
    res.render('details', {
      animal,
      isOwner: animal.owner.toString() === req.user?._id,
      hasDonated: animal.donations.find((x) => x.toString() === req.user?._id),
    });
  } catch (err) {
    console.log(err);
    res.render('404');
  }
});

router.get('/:id/donate', isAuth, async (req, res) => {
  try {
    const animalID = req.params.id;
    await donateAnimal(animalID, req.user._id);
    res.redirect(`/animal/${animalID}`);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.get('/:id/delete', isAuth, async (req, res) => {
  try {
    const animalID = req.params.id;
    await deleteAnimal(animalID, req.user._id);
    res.redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.get('/:id/edit', isAuth, async (req, res) => {
  try {
    const animalID = req.params.id;
    const animal = await getAnimal(animalID);
    if (animal.owner.toString() !== req.user._id) {
      throw new Error('Unauthorized');
    }
    res.render('edit', { animal });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

router.post('/:id/edit', isAuth, async (req, res) => {
  try {
    const { name, years, kind, image, location, description } = req.body;
    const animalID = req.params.id;
    await editAnimal(
      animalID,
      {
        name,
        years,
        kind,
        image,
        location,
        description,
      },
      req.user._id
    );
    res.redirect(`/animal/${animalID}`);
  } catch (err) {
    const error = errorHandler(err);
    res.render('edit', { error });
  }
});

module.exports = router;
