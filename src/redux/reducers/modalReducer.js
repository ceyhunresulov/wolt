const initialState = {
  open: false,
  login: false,
  address: false,
  order: false,
  orders: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_MODAL":
      return { ...initialState, open: true, login: true };

    case "ADDRESS_MODAL":
      return { ...initialState, open: true, address: true };
    case "ORDERS_MODAL":
      return { ...initialState, open: true, orders: true };
    case "ADD_ORDER_MODAL":
      return { ...initialState, open: true, order: true };
    case "CLOSE_MODAL":
      return { ...state, open: false };
    default:
      return state;
  }
};

export default modalReducer;
