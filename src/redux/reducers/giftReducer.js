const giftReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_GIFT":
      return action.payload;
    default:
      return state;
  }
};

export default giftReducer