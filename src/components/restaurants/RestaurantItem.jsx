import React from "react";
import { IoBicycleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function RestaurantItem({ img, name, desc, courierMoney, restaurant }) {
  const goToRestaurant = () => {
    localStorage.setItem("currentRestaurant", JSON.stringify(restaurant));
  };
  return (
    <li className="relative cursor-pointer rounded-lg shadow-md w-full md:w-[49%] lg:w-[32.4%] h-[310px] md:h-[320px] lg:h-[330px] mb-4 flex flex-col justify-between overflow-hidden transition-all ease-in duration-200 hover:scale-105">
      <Link
        onClick={goToRestaurant}
        to="/restaurant"
        className="absolute top-0 left-0 w-full h-full"
      ></Link>
      <div className="w-full h-2/3 md:h-3/5">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <h3 className="ml-5 text-lg font-semibold">{name}</h3>
      <span className="ml-5 text-sm text-[#202125a3]">{desc}</span>
      <div className="h-8 flex items-center py-1 px-5 box-border border-t border-[#2021251f] border-dashed">
        <IoBicycleSharp className="text-[#202125a3]" />
        <span className="p-0 text-[#202125a3] m-4">{courierMoney} AZN</span>
      </div>
    </li>
  );
}

export default RestaurantItem;
