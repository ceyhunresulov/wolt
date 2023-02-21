import { categories } from "../../database/categories";

const getCategoriesReducer = (state = categories, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default getCategoriesReducer;
