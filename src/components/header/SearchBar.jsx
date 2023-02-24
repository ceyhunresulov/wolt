import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";

function SearchBar({ bgSearch, textColor, placeholder,searchWidth }) {
  const [serarchFocus, setSearchFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={`w-2/4 md:w-1/3 shrink-0 flex items-center justify-center`}
    >
      <form
        className={`form ${bgSearch} ${searchWidth} ${
          serarchFocus
            ? "outline outline-[3.5px] outline-firstColor"
            : "border-none"
        }`}
      >
        <AiOutlineSearch
          className={`text-xl cursor-pointer font-semibold ${textColor} }`}
        />
        <input
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          onChange={onHandleChange}
          value={inputValue}
          className={`text-sm w-3/5 xs:w-4/5 h-full border-none focus:outline-none bg-transparent font-medium caret-firstColor ${textColor} ${placeholder}`}
          type="text"
          placeholder="Wolt-da axtarın..."
        />
        <IoMdCloseCircle
          onClick={() => setInputValue("")}
          className={`text-lg cursor-pointer transition-all ease-linear duration-100 ${
            inputValue ? "visible" : "invisible scale-0"
          } ${textColor}`}
        />
      </form>
    </div>
  );
}

export default SearchBar;
