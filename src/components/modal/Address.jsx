import React, { useState } from "react";

function Address() {
  const [address, setAddress] = useState("");

  return (
    <div className="mt-6 h-[80vh] flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Yeni ünvan əlavə edin</h1>
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <label
            htmlFor="select"
            className="h-[52px] px-3.5 box-border relative outline-2 outline-firstColor focus-within:outline hover:outline border-2 transition-all ease-in duration-100 rounded-lg w-full cursor-pointer flex flex-col justify-end group mb-2"
          >
            <label className="text-xs text-secondaryColor absolute top-1 ml-1">
              Ölkə
            </label>
            <select
              id="select"
              className="h-full w-full text-base outline-none !px-0 pt-4 cursor-pointer"
            >
              <option className="p-0" value="">
                Azərbaycan
              </option>
              <option value="">Çexiya</option>
              <option value="">Almanya</option>
              <option value="">Gürcüstan</option>
              <option value="">Polşa</option>
              <option value="">Litva</option>
              <option value="">Norveç</option>
              <option value="">Yaponiya</option>
            </select>
          </label>

          <label
            htmlFor="text"
            className="h-[52px] px-3.5 box-border relative outline-2 outline-firstColor focus-within:outline focus-within:outline-[3px] hover:outline border-2 transition-all ease-in duration-100 rounded-lg w-full hover:cursor-text flex flex-col justify-end group mb-2"
          >
            <input
              type="text"
              id="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="text-base peer outline-none py-1"
            />
            <span className="text-base text-secondaryColor absolute top-1/2 -translate-y-1/2 peer-invalid:top-2 peer-invalid:text-xs peer-focus:top-3 peer-focus:text-xs transition-all ease-linear duration-100">
              Küçənin adı və nömrəsi
            </span>
          </label>

          <button
            className={`w-full h-[52px] transition-all ease-in duration-150 text-center  font-semibold rounded-lg ${
              address
                ? "bg-firstColor text-white"
                : "bg-firstColorLight text-secondaryLight"
            } `}
          >
            Növbəti
          </button>
        </form>
      </div>
      <div className="h-[60%] ">
        <img
          src={require("../../images/address.png")}
          className="w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Address;
