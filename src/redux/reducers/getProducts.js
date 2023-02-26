import products from "../../database/products";
import { categories } from "../../database/categories";

const getProductsReducer = (state = products, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return [
        ...products.filter((item) => item.restId.includes(action.payload)),
      ];
    default:
      return state;
  }
};

export default getProductsReducer;
