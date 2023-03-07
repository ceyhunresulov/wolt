import { restaurants } from "../../database/restaurants";

const initialState =
  JSON.parse(localStorage.getItem("restaurant")) || restaurants;

const getRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      localStorage.removeItem("restaurant");
      return restaurants;
    case "GET_CURRENT_RESTAURANT":
      const currRest = restaurants.filter((rest) => rest.id === action.payload);
      localStorage.setItem("restaurant", JSON.stringify(currRest));
      return currRest;
    default:
      return state;
  }
};

export default getRestaurantsReducer;
