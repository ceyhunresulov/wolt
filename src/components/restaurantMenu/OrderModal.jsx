import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function OrderModal({ product }) {
  console.log(product);
  return (
    <div
      className={`${
        product ? "h-full visible" : "h-1/2 invisible"
      } w-full bg-[#20212554] fixed z-50 bottom-0 flex items-center justify-center`}
    >
      <div className="bg-white h-4/5 w-1/3 rounded-2xl overflow-hidden">
        <div className="w-full h-2/3">
          <img
            src={product.img}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full pt-4 px-3 pb-3 box-border h-1/3 flex flex-col justify-between">
          <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <span className="text-md font-semibold text-blue">
              {product.price}.00 AZN
            </span>
          </div>
          <div className="w-full border h-12">
            <div className="bg-lightBlue w-1/3 h-full p-4 flex justify-between items-center shadow">
              <AiOutlineMinus className="bg-white rounded-full text-2xl text-blue" />
              <span className="text-md text-blue">1</span>
              <AiOutlinePlus className="bg-white rounded-full text-2xl text-blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
