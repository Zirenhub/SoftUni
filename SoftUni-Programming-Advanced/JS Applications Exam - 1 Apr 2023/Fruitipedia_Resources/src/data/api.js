import { clearUserData, getUserData } from '../util.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  // load user data
  const userData = getUserData();

  if (userData) {
    const token = userData.accessToken;
    options.headers['X-Authorization'] = token;
  }

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(host + url, options);

    let result;
    if (res.status != 204) {
      result = await res.json();
    }

    if (!res.ok) {
      if (res.status === 403) {
        clearUserData();
      }
      throw new Error(result.message);
    }

    return result;
  } catch (err) {
    alert(err.message);
    throw err;
  }
}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
