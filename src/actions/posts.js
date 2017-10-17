import axios from 'axios';

// Action that gets all of the posts
export const getAllPosts = () => ({
  type: 'GET_ALL_POSTS',
  payload: axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log('res', res);
      const firstFive = [];
      for (let i = 0; i < 5; i++) {
        firstFive.push(res.data[i]);
      }
      console.log('firstFive', firstFive);
      return firstFive;
    })
});

export const addNewPost = post => ({
  type: 'ADD_NEW_POST',
  payload: post
});
