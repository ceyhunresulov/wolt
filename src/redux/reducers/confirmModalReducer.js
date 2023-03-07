const confirmModalReducer = (state = false, action) => {
  switch (action.type) {
    case "OPEN_CONFIRM_MODAL":
      return true;
    case "CLOSE_CONFIRM_MODAL":
      return false;
    default:
      return state;
  }
};

export default confirmModalReducer;
