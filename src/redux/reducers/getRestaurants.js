import { restaurants } from "../../database/restaurants";

const getRestaurantsReducer = (state = restaurants, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return restaurants;
    case "GET_CURRENT_RESTAURANT":
      return [...state.filter((rest) => rest.id === action.payload)];
    default:
      return state;
  }
};

export default getRestaurantsReducer;
