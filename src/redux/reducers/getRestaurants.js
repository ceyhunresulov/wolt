import { restaurants } from '../../database/restaurants';

const getRestaurantsReducer = (state = restaurants, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default getRestaurantsReducer;
