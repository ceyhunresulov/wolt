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

export const changeCurrentProuductAction = (payload) => {
  return {
    type: "CHANGE_CURRENT_PRODUCT_COUNT",
    payload,
  };
};

export const updateCurrentProductAction = (payload) => {
  return {
    type: "UPDATE_CURRENT_PRODUCT",
    payload,
  };
};
