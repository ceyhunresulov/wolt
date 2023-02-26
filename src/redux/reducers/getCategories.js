import { categories } from "../../database/categories";

const getCategoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case "GET_CURRENT_CATEGORIES":
      return [...state.filter((item) => item.restId.includes(action.payload))];
    default:
      return state;
  }
};

export default getCategoriesReducer;
