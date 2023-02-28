import { createStore, combineReducers } from "redux";
import getCategoriesReducer from "../reducers/getCategories";
import getCurrentProductReducer from "../reducers/getCurrentProduct";
import getProductsReducer from "../reducers/getProducts";
import getRestaurantsReducer from "../reducers/getRestaurants";
import headerStyleReducer from "../reducers/headerStyle";
import modalReducer from "../reducers/modalReducer";

const reducers = combineReducers({
  restaurants: getRestaurantsReducer,
  categories: getCategoriesReducer,
  style: headerStyleReducer,
  products: getProductsReducer,
  product: getCurrentProductReducer,
  modal: modalReducer,
});

const store = createStore(reducers);

export default store;
