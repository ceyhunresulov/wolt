export const addUserAction = (payload) => {
  return {
    type: "ADD_USER",
    payload
  };
};

export const getUserAction = () => {
  return {
    type: "GET_USER",
  };
};

export const closeUserAction = () => {
  return {
    type: "CLOSE_USER",
  };
};
