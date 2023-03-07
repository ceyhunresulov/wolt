const initialState = JSON.parse(localStorage.getItem("user"));

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.payload)
      localStorage.setItem("user", JSON.stringify(action.payload));
      const user = JSON.parse(localStorage.getItem("user"));
      return user;
    case "GET_USER":
      return state;
    case "CLOSE_USER":
      localStorage.removeItem("user");
      return null;
    default:
      return state;
  }
};
export default userReducer;
