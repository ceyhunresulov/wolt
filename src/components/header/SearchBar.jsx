import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../redux/actions/searchAction";
import SearchItem from "./SearchItem";

function SearchBar({ bgSearch, textColor, placeholder, searchWidth }) {
  const dispatch = useDispatch();
  const [serarchFocus, setSearchFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRestaurant = useSelector((state) => state.search);
  console.log(searchRestaurant);

  const onHandleChange = (e) => {
    setInputValue(e.target.value);
    dispatch(searchAction(e.target.value));
  };

  const resetInput = () => {
    setInputValue("");
    dispatch(searchAction(""));
  };

  return (
    <div
      className={`w-2/4 md:w-1/3 shrink-0 flex items-center justify-center relative`}
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
          onClick={resetInput}
          className={`text-lg cursor-pointer transition-all ease-linear duration-100 ${
            inputValue ? "visible" : "invisible scale-0"
          } ${textColor}`}
        />
      </form>
      <div
        className={`bg-white border shadow-2xl w-screen sm:w-[640px] min-h-[65px] max-h-[80vh] absolute top-full z-50 rounded-md flex flex-col items-center overflow-scroll transition-all ease-linear duration-150 delay-75 ${
          searchRestaurant.length === 0 ? "justify-center" : ""
        } ${serarchFocus ? "mt-0" : "invisible opacity-0 mt-2"}`}
      >
        {(searchRestaurant.length === 0 && (
          <p className="text-thirdColor text-lg">
            Bu axtarışdan heç nə tapılmadı 😕
          </p>
        )) ||
          searchRestaurant.map((item) => (
            <SearchItem key={item.id} restaurant={item} />
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
