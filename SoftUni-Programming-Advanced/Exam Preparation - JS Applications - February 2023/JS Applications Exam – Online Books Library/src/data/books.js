import { del, get, post, put } from './api.js';

function getAllBooks() {
  return get('/data/books?sortBy=_createdOn%20desc');
}

function getBook(id) {
  return get(`/data/books/${id}`);
}

function createBook(book) {
  return post('/data/books', book);
}

function editBook(id, book) {
  return put(`/data/books/${id}`, book);
}

function deleteBook(id) {
  return del(`/data/books/${id}`);
}

function getMyBooks(id) {
  return get(
    `/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`
  );
}

function getLikes(id) {
  return get(
    `/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`
  );
}

function getUserLike(bookId, userId) {
  return get(
    `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );
}

function likeBook(id) {
  return post('/data/likes', { bookId: id });
}

export {
  getAllBooks,
  createBook,
  getBook,
  editBook,
  deleteBook,
  getMyBooks,
  getLikes,
  getUserLike,
  likeBook,
};
