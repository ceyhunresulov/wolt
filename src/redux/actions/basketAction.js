export const addProductBasketAction = (payload) => {
  return {
    type: "ADD_PRODUCT_BASKET",
    payload,
  };
};

export const updateBasketAction = (payload) => {
  return {
    type: "UPDATE_BASKET",
    payload,
  };
};

export const closeOrderBasketAction = (payload) => {
  return {
    type: "CLOSE_ORDER_BASKET",
    payload,
  };
};

export const resetBasketAction = () => {
  return {
    type: "RESET_BASKET",
  };
};
