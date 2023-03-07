import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { modalLoginAction } from "../../redux/actions/modalAction";
import { closeUserAction } from "../../redux/actions/userAction";

function LoginMobil() {
  const user = useSelector((state) => state.user);
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const [profilBox, setProfilBox] = useState(false);

  const clickProfil = () => {
    setProfilBox(!profilBox);
  };

  const closeUser = () => {
    dispatch(closeUserAction());
  };

  const login=()=>{
    dispatch(modalLoginAction())
  }

  return (
    <div
      className={`w-1/4 md:w-1/3 flex-1 flex justify-end items-center ${
        user ? "flex" : "flex lg:hidden"
      }`}
    >
      <div
        onClick={clickProfil}
        className={`${style.bgSearch} h-8 xs:h-9 lg:h-10 flex items-center  rounded-3xl lg:rounded-[28px] p-[2px] cursor-pointer relative`}
      >
        <div className="w-7 h-7 lg:w-9 lg:h-9 bg-white rounded-full">
          {(user && (
            <div className="w-full h-full bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
              <span className="uppercase text-secondaryColor text-xs md:text-base font-medium">
                {user[0]}
              </span>
            </div>
          )) || (
            <IoPersonCircle className="text-fourthColor w-full h-full rounded-full scale-105" />
          )}
        </div>

        <MdOutlineKeyboardArrowDown
          className={`transition-all ease-linear duration-100 text-2xl ml-2 lg:ml-1 lg:text-3xl ${
            profilBox ? "scale-flip" : ""
          } ${style.textColor}`}
        />

        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-full mt-2 flex flex-col justify-between transition-all ease-linear duration-200 rounded-lg  bg-white border shadow-lg pt-2 box-border cursor-auto ${
            profilBox ? " opacity-100 visible" : "invisible opacity-0"
          } ${user ? "h-48 md:w-64 md:h-52 w-56" : "w-72 pb-2"} `}
        >
          <div className="absolute right-6 -top-1.5 text-white w-3 h-3 -rotate-45 border-t border-r bg-white z-10"></div>

          <div className="w-full flex flex-col text-sm lg:text-base text-thirdColor px-2">
            {(user && (
              <div
                className={`transition-all ease-in duration-100 rounded-lg cursor-pointer hover:bg-secondaryDark flex items-center py-2 px-3 box-border justify-between w-full`}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center bg-orange-500 rounded-full mr-4">
                    <span className="uppercase text-secondaryColor font-medium">
                      {user && user[0]}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondaryColor">Profil</span>
                    <span className="font-semibold text-thirdColor">
                      {user && user.split("@")[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <MdOutlineKeyboardArrowRight className="text-3xl font-light" />
                </div>
              </div>
            )) || (
              <div className="w-full mb-4 box-border">
                <button
                  onClick={login}
                  className="hover:bg-secondaryDark w-full py-2 px-3 text-start box-border rounded-lg"
                >
                  Giriş edin və ya qeydiyyatdan keçin
                </button>
                <div className="absolute left-0 mt-2 border-b w-full"></div>
              </div>
            )}
            <button className="hover:bg-secondaryDark py-2 px-3 text-start box-border rounded-lg">
              Dil: Azərbaycan
            </button>
            <button className="hover:bg-secondaryDark py-2 px-3 text-start box-border rounded-lg">
              Dəstək
            </button>
          </div>
          {user && (
            <div className="border-t text-sm md:text-base  flex items-center px-2 py-1 mt-1">
              <button
                onClick={closeUser}
                className="hover:bg-secondaryDark py-2 px-3 text-start box-border rounded-lg w-full"
              >
                Çıxış
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginMobil;
