import { del, get, post, put } from './api.js';

export function getFruits() {
  return get('/data/fruits?sortBy=_createdOn%20desc');
}

export function addFruit(fruit) {
  return post('/data/fruits', fruit);
}

export function getFruit(id) {
  return get(`/data/fruits/${id}`);
}

export function editFruit(id, fruit) {
  return put(`/data/fruits/${id}`, fruit);
}

export function deleteFruit(id) {
  return del(`/data/fruits/${id}`);
}

export function searchFruit(query) {
  return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}
