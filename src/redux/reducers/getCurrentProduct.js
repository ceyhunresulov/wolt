import products from "../../database/products";

const initialState = products[0];

const getCurrentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_PRODUCT":
      const product = products.find((product) => product.id === action.payload.proId);
      return {
        ...product,
        price: product.price.find((item) => item.id === action.payload.restId).value,
      };
    default:
      return state;
  }
};

export default getCurrentProductReducer;
