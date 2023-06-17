const PhotoModel = require('../models/Photo');

const createPost = async (postData) => {
  const newPost = await PhotoModel.create(postData);
  return newPost.toObject();
};

const getAllPosts = async () => {
  const allPosts = await PhotoModel.find({}).populate('owner').lean();
  return allPosts;
};

const getPost = async (postID) => {
  const post = await PhotoModel.findById(postID)
    .populate('owner')
    .populate('commentList.user')
    .lean();
  if (!post) {
    throw new Error('Post not found');
  }
  return post;
};

const postComment = async (postID, commentData) => {
  const updatedPost = await PhotoModel.findByIdAndUpdate(
    postID,
    { $push: { commentList: commentData } },
    { new: true }
  )
    .populate('owner')
    .populate('commentList.user')
    .lean();
  return updatedPost;
};

const deletePost = async (postID, userID) => {
  const deletedPost = await PhotoModel.findOneAndDelete({
    _id: postID,
    owner: userID,
  });
  if (!deletedPost) {
    throw new Error('Post not found or unauthorized');
  }
  return deletedPost.toObject();
};

const getRawPost = async (postID, userID) => {
  const post = await PhotoModel.findOne({ _id: postID, owner: userID }).lean();
  if (!post) {
    throw new Error('Post not found or unauthorized');
  }
  return post;
};

const updatePost = async (postID, userID, newData) => {
  const updatedPost = await PhotoModel.findOneAndUpdate(
    { _id: postID, owner: userID },
    { $set: newData },
    { new: true }
  ).lean();
  if (!updatedPost) {
    throw new Error('Post not found or unauthorized');
  }
  return updatedPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPost,
  postComment,
  deletePost,
  getRawPost,
  updatePost,
};
