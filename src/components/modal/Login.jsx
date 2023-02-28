import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";

function Login() {
  return (
    <div className="mt-12">
      <h1 className="font-fredoka text-3xl font-light mb-8">
        Hesab yaradın ve ya daxil olun
      </h1>
      <h3 className="text-base mb-8">
        Aşağıda daxil olun və ya yeni Wolt hesabı yaradın.
      </h3>

      <div className="font-semibold text-base flex flex-col">
        <button className="flex justify-start items-center p-3.5 mb-2 border-2 rounded-lg text-thirdColor relative group  overflow-hidden">
          <FcGoogle className="text-lg" />
          <span className="justify-self-center block text-center w-full">
            Google ilə davam et
          </span>
          <div className="absolute top-0 left-0 group-hover:bg-secondaryDark transition-all ease-in duration-200  w-full h-full"></div>
        </button>

        <button className="flex justify-start items-center p-3.5 mb-2 border-2 rounded-lg text-white bg-black border-black  relative group overflow-hidden">
          <BsApple className="text-lg" />
          <span className="justify-self-center block text-center w-full">
            Apple ilə davam et
          </span>
          <div className="absolute top-0 left-0 group-hover:bg-secondaryDark transition-all ease-in duration-200  w-full h-full"></div>
        </button>

        <button className="flex justify-start items-center p-3.5 border-2 rounded-lg text-white bg-blue border-blue relative group overflow-hidden">
          <BsFacebook className="text-lg" />
          <span className="justify-self-center block text-center w-full">
            Facebook ilə davam et
          </span>
          <div className="absolute top-0 left-0 group-hover:bg-secondaryDark transition-all ease-in duration-200  w-full h-full"></div>
        </button>
      </div>

      <div className="">
        <div className="flex justify-between items-center my-4">
          <span className="border w-1/4 bg-thirdColor "></span>
          <span className=" w-2/4 text-center">
            və ya e-poçt ilə daxil olun
          </span>
          <span className="border w-1/4 bg-thirdColor "></span>
        </div>

        <form className="w-full">
          <label
            htmlFor="email"
            className="h-[52px] px-3.5 box-border relative outline-2 outline-firstColor focus-within:outline focus-within:outline-[3px] hover:outline border-2 transition-all ease-in duration-100 rounded-lg w-full hover:cursor-text flex flex-col justify-end group mb-4"
          >
            <input
              type="email"
              id="email"
              className="text-base peer outline-none py-1"
            />
            <span className="text-base text-secondaryColor absolute top-1/2 -translate-y-1/2 peer-invalid:top-2 peer-invalid:text-xs peer-focus:top-3 peer-focus:text-xs transition-all ease-linear duration-100">
              E-poçt
            </span>
          </label>

          <button className="w-full h-[52px] bg-firstColor hover:bg-firstColorLight transition-all ease-in duration-150 text-center text-white font-semibold rounded-lg ">
            Növbəti
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
