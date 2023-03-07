import React from "react";
import { IoBicycleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function RestaurantItem({ img, name, desc, courierMoney, restaurant,id }) {
  return (
    <Link to={`/${id}`} className="rest-card group">
      <div className="w-full h-2/3 md:h-3/5 overflow-hidden">
        <img src={img} alt="" className="transition-all ease-in duration-200 h-full w-full object-cover group-hover:scale-[1.03]" />
      </div>
      <h3 className="ml-5 text-lg font-semibold">{name}</h3>
      <span className="ml-5 text-sm text-[#202125a3]">{desc}</span>
      <div className="h-8 text-xs flex items-center py-1 px-5 box-border border-t border-[#2021251f] border-dashed">
        <IoBicycleSharp className="text-[#202125a3]" />
        <span className="p-0 text-xs text-[#202125a3] m-4">{courierMoney} AZN</span>
      </div>
    </Link>
  );
}

export default RestaurantItem;
