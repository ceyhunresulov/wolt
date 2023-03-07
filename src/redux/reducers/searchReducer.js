import { restaurants } from "../../database/restaurants";

const initialState = [];
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_RESTAURANT":
      return action.payload
        ? restaurants.filter((item) =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : [];
    default:
      return state;
  }
};

export default searchReducer;
