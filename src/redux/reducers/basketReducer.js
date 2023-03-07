const initialState = JSON.parse(localStorage.getItem("basket")) || [];

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_BASKET": {
      const newBasket = [
        ...state.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return newBasket;
    }

    case "UPDATE_BASKET": {
      state.find((item) => item.id === action.payload.id).count =
        action.payload.count;
      const newBasket = [...state];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return newBasket;
    }
    case "CLOSE_ORDER_BASKET": {
      const newBasket = [...state.filter((item) => item.id !== action.payload)];
      if (newBasket.length > 0) {
        localStorage.setItem("basket", JSON.stringify(newBasket));
      } else localStorage.removeItem("basket");
      return newBasket;
    }
    case "RESET_BASKET":
      localStorage.removeItem("basket");
      return [];
    default:
      return state;
  }
};

export default basketReducer;
