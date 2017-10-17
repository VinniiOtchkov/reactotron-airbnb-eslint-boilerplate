import axios from 'axios';

export const fetchPosts = () => {
  return {
    type: 'FETCH',
    payload: axios.get('https://59e5b56cf99ad900122682ad.mockapi.io/posts')
  };
};

export const addPost = (post) => {
  return {
    type: 'ADD',
    payload:axios.post('https://59e5b56cf99ad900122682ad.mockapi.io/posts', post)
  };
};
