//A reducer is a function that accepts the state and also accepts action.

export default(posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts,action.payload];
    default:
      return posts;
  }
};
