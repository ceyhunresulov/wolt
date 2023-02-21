import { createStore, combineReducers } from "redux";
import getCategoriesReducer from "../reducers/getCategories";
import getRestaurantsReducer from "../reducers/getRestaurants";

const reducers = combineReducers({
  restaurants: getRestaurantsReducer,
  categories: getCategoriesReducer,
});

const store = createStore(reducers);

export default store;
