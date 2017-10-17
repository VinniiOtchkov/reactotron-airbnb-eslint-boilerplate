export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_FULFILLED':
      return [...action.payload];
    case 'ADD_NEW_POST':
      return [...state, action.payload];
    default:
      return state;
  }
};
