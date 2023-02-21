export const getRestaurants = (payload) => {
  return {
    type: "GET_RESTAURANTS",
    payload,
  };
};
