import { AiOutlineCloseCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoSearchOutline, IoBicycleSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";

import { useState } from "react";

function SearchBar() {
  const [onFocus, setOnFocus] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onHandleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-full lg:absolute lg:h-28 -top-14 bg-white rounded-lg lg:shadow-lg lg:border lg:flex items-center justify-between lg:px-8 box-border">
      <div className="lg:h-12 w-full lg:flex justify-between">
        <div className="lg:flex items-center h-full">
          <div className="flex h-full justify-between lg:justify-start items-center mb-4 lg:mb-0">
            <div className="flex h-full items-center">
              <FaSmile className="text-orange-400 bg-black rounded-full text-2xl sm:text-3xl" />
              <span className="lg:hidden ml-4 text-sm">Çox yaxşı,</span>
              <span className="text-base lg:text-3xl lg:font-bold text-thirdColor mx-2">
                8.8
              </span>
              <span className="text-secondaryColor hidden lg:block mt-2 text-sm">
                10-dan
              </span>
            </div>
            <button className="lg:hover:bg-bgSecondaryLight ml-8 flex items-center justify-center text-md text-secondaryColor font-medium border px-2 py-2 box-border lg:px-4 h-full rounded-lg ">
              <BsHeart className="lg:mr-5 text-base" />
              <span className="hidden lg:block">Sevimli</span>
            </button>
          </div>

          <div className="mb-4 lg:hidden">
            <div className="flex items-center mb-4">
              <HiOutlineClock className="mr-5 text-2xl sm:text-3xl" />
              <span className="text-base">09:00-01:00</span>
            </div>
            <div className="flex items-center">
              <IoBicycleSharp className="mr-5 text-2xl sm:text-3xl" />
              <span className="text-base">
                Ortalama çatdırılma vaxtı
                <span className="font-bold">20 – 30 dəqiqədir</span>
              </span>
            </div>
          </div>

          <div className="flex mb-4 lg:mb-0 lg:ml-6 h-full">
            <button className="lg:hover:bg-bgSecondaryLight flex items-center justify-center text-md text-thirdColor lg:text-secondaryColor lg:font-medium lg:border  lg:px-4 h-full rounded-lg ">
              <AiOutlineUsergroupAdd className="mr-5 text-2xl sm:text-3xl lg:text-lg" />
              <span className="text-base">Birlikdə sifariş edin</span>
            </button>
          </div>
        </div>

        <form
          className={`bg-[#c8c8c833] h-10 w-full lg:w-64 lg:h-full border hover:border-black hover:cursor-text transition-all ease-linear duration-100 rounded-md flex items-center justify-between px-2 box-border text-base ${
            onFocus ? "outline outline-2 outline-firstColor" : ""
          }`}
        >
          <IoSearchOutline className=" text-thirdColor" />
          <input
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            type="text"
            placeholder="Axtarış"
            className="mx-2 w-11/12 bg-transparent focus:outline-0 text-xs h-full"
            onChange={onHandleChange}
            value={searchValue}
          />
          <AiOutlineCloseCircle
            className={`${
              searchValue ? "visible" : "invisible scale-0"
            } transition-all ease-linear duration-150`}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
