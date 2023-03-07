import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalLoginAction } from "../../redux/actions/modalAction";

function LoginBtns({ textColor }) {
  const dispatch = useDispatch();
  const user=useSelector(state=> state.user)

  const login = () => {
    dispatch(modalLoginAction());
  };

  return (
    <div
      className={`w-1/3 justify-end items-center  ${
        user ? "hidden" : "hidden lg:flex"
      }`}
    >
      <button onClick={login} className={`text-sm font-medium ${textColor} `}>
        Daxil ol
      </button>
      <button
        onClick={login}
        className="bg-firstColor text-white px-4 py-[11px] ml-6 rounded-md text-base font-bold"
      >
        Qeydiyyatdan keçin
      </button>
    </div>
  );
}

export default LoginBtns;
