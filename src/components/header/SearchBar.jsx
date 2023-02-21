import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar() {
  const [serarchFocus, setSearchFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-1/3 flex items-center justify-center">
      <form
        className={`h-10 w-[260px] rounded-3xl flex items-center justify-center bg-bgSecondary ${
          serarchFocus
            ? "outline outline-[3.5px] outline-firstColor"
            : "border-none"
        }`}
      >
        <GrSearch className="text-md cursor-pointer font-semibold" />
        <input
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          onChange={onHandleChange}
          value={inputValue}
          className="text-sm mx-2 h-full border-none focus:outline-none bg-transparent font-medium caret-firstColor"
          type="text"
          placeholder="Wolt-da axtarın..."
        />
        <IoMdCloseCircle
          onClick={() => setInputValue("")}
          className={`text-xl cursor-pointer transition-all ease-linear duration-100 ${
            inputValue ? "visible" : "invisible scale-0"
          }`}
        />
      </form>
    </div>
  );
}

export default SearchBar;
