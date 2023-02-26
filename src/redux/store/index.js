import { createStore, combineReducers } from "redux";
import getCategoriesReducer from "../reducers/getCategories";
import getProductsReducer from "../reducers/getProducts";
import getRestaurantsReducer from "../reducers/getRestaurants";
import headerStyleReducer from "../reducers/headerStyle";

const reducers = combineReducers({
  restaurants: getRestaurantsReducer,
  categories: getCategoriesReducer,
  style: headerStyleReducer,
  products: getProductsReducer,
});

const store = createStore(reducers);

export default store;
