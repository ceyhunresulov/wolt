import { createStore, combineReducers } from "redux";
import basketReducer from "../reducers/basketReducer";
import confirmModalReducer from "../reducers/confirmModalReducer";
import getCategoriesReducer from "../reducers/getCategories";
import getCurrentProductReducer from "../reducers/getCurrentProduct";
import getProductsReducer from "../reducers/getProducts";
import getRestaurantsReducer from "../reducers/getRestaurants";
import giftReducer from "../reducers/giftReducer";
import headerStyleReducer from "../reducers/headerStyle";
import modalReducer from "../reducers/modalReducer";
import searchReducer from "../reducers/searchReducer";
import userReducer from "../reducers/userReducer";

const reducers = combineReducers({
  restaurants: getRestaurantsReducer,
  categories: getCategoriesReducer,
  style: headerStyleReducer,
  products: getProductsReducer,
  product: getCurrentProductReducer,
  modal: modalReducer,
  basket: basketReducer,
  user: userReducer,
  gift: giftReducer,
  confirm: confirmModalReducer,
  search: searchReducer,
});

const store = createStore(reducers);

export default store;
