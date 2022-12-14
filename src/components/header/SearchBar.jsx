import React, { useState } from "react";
import { AiOutlineSearch, AiFillCloseCircle } from "react-icons/ai";

function SearchBar({ checkLink }) {
  const [showBorder, setShowBorder] = useState(false);
  const addBorder = () => {
    setShowBorder(true);
  };
  const removeBorder = () => {
    setShowBorder(false);
  };
  return (
    <form
      action=""
      className={`hover:transition-all linear duration-500 py-2.5 px-3.5 box-border rounded-[25px] flex justify-between items-center ${
        checkLink ? "bg-[#c8c8c8cc] hover:bg-[#c8c8c899]" : "bg-[#2021251f]"
      } ${showBorder ? "border-[#009DE0] border-4 " : ""}`}
    >
      <AiOutlineSearch
        className={`search-icon lg:text-[20px] mr-1 ${
          checkLink ? "text-white" : ""
        }`}
      />
      <input
        onFocus={addBorder}
        onBlur={removeBorder}
        type="text"
        className={`${
          checkLink ? "text-white placeholder-white" : ""
        } search-input border-0 bg-0 bg-transparent w-[200px] text-sm focus:outline-0 text-xs lg:text-base w-[130px] lg:w-[240px]
         `}
        placeholder="Search in Wolt..."
      />
      <AiFillCloseCircle
        className={`search-reset lg:text-[20px] ${
          checkLink ? "text-white" : ""
        }`}
      />
    </form>
  );
}

export default SearchBar;
