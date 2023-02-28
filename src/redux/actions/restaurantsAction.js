export const getRestaurants = () => {
  return {
    type: "GET_RESTAURANTS",
  };
};

export const getCurrentRestaurant = (payload) => {
  return {
    type: "GET_CURRENT_RESTAURANT",
    payload,
  };
};
