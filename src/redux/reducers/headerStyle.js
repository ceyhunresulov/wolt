const initialState = {
  backgroundColor: "bg-white",
  logoColor: true,
  textColor: "text-thirdColor",
  bgSearch: "bg-bgSecondary",
  customerBox: "flex",
  position: "fixed",
  border: "md:border",
  placeholder: "",
  width: "w-desktop",
  searchWidth: "xl:w-[55%]",
};

const headerStyleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME":
      return initialState;
    case "MENU":
      return {
        backgroundColor: "bg-transparent",
        logoColor: false,
        textColor: "text-white",
        bgSearch: "bg-bgSecondaryLight",
        customerBox: "hidden",
        position: "absolute",
        border: "",
        placeholder: "placeholder-white",
        width: "lg:w-smTablet",
        searchWidth: "xl:4/5",
      };
    case "PAYMENT":
      return {
        backgroundColor: "bg-white",
        logoColor: true,
        textColor: "text-thirdColor",
        bgSearch: "bg-bgSecondary",
        customerBox: "hidden",
        position: "static",
        border: "md:border",
        placeholder: "",
        width: " xl:w-tablet",
        searchWidth: "xl:w-[55%]",
      };
    default:
      return state;
  }
};

export default headerStyleReducer;
