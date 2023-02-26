export const getCategories = () => {
  return {
    type: "GET_CATEGORIES",
  };
};

export const getCurrentCategories = (payload) => {
  return {
    type: "GET_CURRENT_CATEGORIES",
    payload,
  };
};
