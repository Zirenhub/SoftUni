const PhotoModel = require('../models/Photo');

const createPost = async (postData) => {
  const newPost = new PhotoModel(postData);
  await newPost.save();
  return newPost;
};

module.exports = {
  createPost,
};
