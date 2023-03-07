import React, { useState } from "react";

function PromoCode() {
  const [code, setCode] = useState("");
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl text-thirdColor font-fredoka mb-8">Promo-kod</h1>
      <div>
        <p className="text-base mb-4">
          Wolt promo-kodunuz varsa, imtiyazlarınızı istəmək üçün onu aşağıda
          daxil edin.
        </p>
        <div className="flex items-start justify-between w-full">
          <label
            htmlFor="text"
            className="h-[52px] w-[70%] px-3.5 box-border relative outline-2 outline-firstColor focus-within:outline focus-within:outline-[3px] hover:outline border-2 transition-all ease-in duration-100 rounded-lg hover:cursor-text flex flex-col justify-end group mb-2"
          >
            <input
              type="text"
              id="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-base peer outline-none py-1"
            />
            <span className="text-base text-secondaryColor absolute top-1/2 -translate-y-1/2 peer-invalid:top-2 peer-invalid:text-xs peer-focus:top-3 peer-focus:text-xs transition-all ease-linear duration-100">
             Promo kodu daxil edin...
            </span>
          </label>
          <button className="bg-firstColor hover:bg-firstColorLight transition-all ease-linear duration-150 text-base font-bold px-10 py-3 box-border text-white rounded-lg">Təqdim et</button>
        </div>
      </div>
    </div>
  );
}

export default PromoCode;
