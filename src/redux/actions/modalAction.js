export const modalLoginAction = () => {
  return {
    type: "LOGIN_MODAL",
  };
};

export const modalAddressAction = () => {
  return {
    type: "ADDRESS_MODAL",
  };
};

export const modalOrdersAction = () => {
  return {
    type: "ORDERS_MODAL",
  };
};

export const modalAddOrderAction = () => {
  return {
    type: "ADD_ORDER_MODAL",
  };
};

export const modalCloseAction=()=>{
    return{
        type: 'CLOSE_MODAL'
    }
}
