const express = require('express');
const {
  getPost,
  postComment,
  deletePost,
  getRawPost,
  updatePost,
} = require('../managers/catalogManager');
const { isAuth } = require('../middlewares/authMiddleware');
const { errorHandler } = require('../util/errorHandler');

const router = express.Router();

const getDetailsProps = (userID, post) => {
  return { post, isOwner: userID === post.owner._id.toString() };
};

router.get('/:id', async (req, res) => {
  try {
    const postID = req.params.id;
    const post = await getPost(postID);

    res.render('details', getDetailsProps(req.user?._id, post));
  } catch (err) {
    res.render('home', { error: err.message });
  }
});

router.get('/:id/delete', isAuth, async (req, res) => {
  try {
    const postID = req.params.id;
    await deletePost(postID, req.user._id);
    res.redirect('/catalog');
  } catch (err) {
    res.render('home', { error: err.message });
  }
});

router.get('/:id/edit', isAuth, async (req, res) => {
  try {
    const postID = req.params.id;
    const post = await getRawPost(postID, req.user._id);
    res.render('catalog/edit', { post });
  } catch (err) {
    res.render('home', { error: err.message });
  }
});

router.post('/:id/edit', isAuth, async (req, res) => {
  try {
    const postID = req.params.id;
    const { name, age, description, location, image } = req.body;
    const updatedPost = await updatePost(postID, req.user._id, {
      name,
      age,
      description,
      location,
      image,
    });
    res.redirect(`/post/${postID}`);
  } catch (err) {
    const error = errorHandler(err);
    res.render('catalog/edit', { error });
  }
});

router.post('/:id/comments', isAuth, async (req, res) => {
  try {
    const postID = req.params.id;
    const { comment } = req.body;

    const post = await postComment(postID, {
      user: req.user._id,
      comment,
    });
    res.render('details', getDetailsProps(req.user._id, post));
  } catch (err) {
    const error = errorHandler(err);
    res.render('home', { error });
  }
});

module.exports = router;
