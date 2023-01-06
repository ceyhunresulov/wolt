import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Header({
  setModul,
  setShowSigns,
  setShowLogin,
  person,
  setPerson,
  checkLink,
}) {
  const [close, setClose] = useState(false);
  const onButtonLogin = () => {
    setModul(true);
    setShowSigns(false);
    setShowLogin(true);
  };
  const onButtonSign = () => {
    setModul(true);
    setShowSigns(true);
    setShowLogin(false);
  };
  const showClose = () => {
    setClose(!close);
  };
  const onHandleClose = () => {
    localStorage.removeItem("currentPerson");
    setPerson(false);
  };
  return (
    <header
      className={`${
        checkLink ? "absolute" : "bg-white border-b fixed"
      }  border-solid border-[#2021251f] h-16 lg:h-18 w-full top-0 left-0 z-10`}
    >
      <div
        id="container"
        className={`${
          checkLink ? "!w-3/4" : ""
        } flex justify-between items-center h-full`}
      >
        <div className="w-1/3 flex justify-start">
          <Link to="/">
            {(checkLink && (
              <h1 className="font-cursive text-white text-2xl p-0 font-bold">
                WOLT
              </h1>
            )) || (
              <img
                src="wolt.png"
                alt=""
                className="w-full scale-75 lg:scale-90 h-full"
              />
            )}
          </Link>
        </div>
        <div className="w-1/3 flex justify-center">
          <SearchBar checkLink={checkLink} />
        </div>
        <div className="w-1/3 h-full flex justify-end">
          {(person && (
            <div className="h-full flex items-center">
              <div className="rounded-full border-2 bg-amber-900 h-4/5 w-[56px] flex items-center justify-center cursor-pointer">
                <span className="text-2xl text-white">
                  {person.name[0].toUpperCase()}
                </span>
              </div>
              <div className="relative ml-2 h-full flex items-center">
                <IoIosArrowDown
                  className={`${
                    checkLink ? "text-white" : ""
                  } text-3xl cursor-pointer text-center`}
                  onClick={showClose}
                ></IoIosArrowDown>
                <div
                  className={`absolute transition-all linear duration-200 left-[50%] translate-x-[-50%] bg-gray-200 shadow-xl flex flex-col items-center justify-center w-[100px] rounded-lg ${
                    close
                      ? "h-[70px] bottom-[-70px]"
                      : "h-[0] bottom-0 overflow-hidden"
                  }`}
                >
                  <Link
                    to="/orders"
                    className="text-center text-lg border-b border-black"
                  >
                    Sifarişlər
                  </Link>
                  <Link
                    to="/"
                    className="text-center text-lg"
                    onClick={onHandleClose}
                  >
                    Çıx
                  </Link>
                </div>
              </div>
            </div>
          )) || (
            <div className="h-full flex items-center">
              <button
                className="text-xs text-[#009DE0] font-bold lg:text-sm bg-transparent py-1 px-1 lg:py-2.5 lg:px-5"
                onClick={onButtonLogin}
              >
                Log in
              </button>
              <button
                className="text-sm lg:text-base bg-[#009DE0] py-2 px-3 lg:py-3.5 lg:px-4 rounded-lg font-semibold text-white"
                onClick={onButtonSign}
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
