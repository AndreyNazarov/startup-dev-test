import axios from 'axios';

const basicURL = 'https://jsonplaceholder.typicode.com/';

axios.defaults.baseURL = basicURL;

export function fetchAllPosts() {
  return axios.get('posts');
}

export function fetchOnePost() {
  return axios.get(`posts/1`);
}

export function fetchClickedPost(id) {
  return axios.get(`posts/${id}`);
}

export function fetchComments(id) {
  return axios.get(`comments?postId=${id}`);
}
