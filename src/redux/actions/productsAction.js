export const getProductsAction = (payload) => {
  return {
    type: "GET_PRODUCTS",
    payload,
  };
};

export const getCurrentProductAction = (payload) => {
  return {
    type: "GET_CURRENT_PRODUCT",
    payload,
  };
};
