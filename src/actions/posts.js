import axios from 'axios';

// Action that gets all of the cameras
export const getAllPosts = () => {
  return {
    type: 'GET_ALL_POSTS',
    payload: axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log('res', res);
        let firstFive = []
        for (var i = 0; i < 5; i++) {
          firstFive.push(res.data[i])
        }
        console.log('firstFive', firstFive);
        return firstFive;
      })
  }
}

export const addNewPost = (post) => {
  return {
    type: 'ADD_NEW_POST',
    payload: post
  }
}
