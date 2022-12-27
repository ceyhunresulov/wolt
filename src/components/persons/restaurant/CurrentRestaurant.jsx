import React, { useState } from "react";
import CurrentCategories from "./CurrentCategories";
import Orders from "./Orders";
import RestaurantInfo from "./RestaurantInfo";

function CurrentRestaurant({ currentRestaurant }) {
  const [isRestaurant, setIsRestaurant] = useState(true);
  const [isCategories, setIsCategories] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  const showRestaurant = () => {
    setIsRestaurant(true);
    setIsCategories(false);
    setIsOrders(false);
  };
  const showCategories = () => {
    setIsRestaurant(false);
    setIsCategories(true);
    setIsOrders(false);
  };
  const showOrders = () => {
    setIsRestaurant(false);
    setIsCategories(false);
    setIsOrders(true);
  };
  return (
    <div className="mt-32 w-desktop mx-auto flex justify-between relative">
      <div className="w-1/5 border shadow-md p-4 h-[400px] box-border sticky top-20">
        <ul>
          <li
            onClick={showRestaurant}
            className={`${
              isRestaurant ? "bg-cyan-500" : "bg-cyan-300"
            } p-1.5 hover:bg-cyan-500 transition-all ease-linear duration-300 mb-2 text-white rounded cursor-pointer`}
          >
            Restaurant
          </li>
          <li
            onClick={showCategories}
            className={`${
              isCategories ? "bg-cyan-500" : "bg-cyan-300"
            } p-1.5 hover:bg-cyan-500 transition-all ease-linear duration-300 mb-2 text-white rounded cursor-pointer`}
          >
            Categories
          </li>
          <li
            onClick={showOrders}
            className={`${
              isOrders ? "bg-cyan-500" : "bg-cyan-300"
            } p-1.5 hover:bg-cyan-500 transition-all ease-linear duration-300 mb-2 text-white rounded cursor-pointer`}
          >
            Orders
          </li>
        </ul>
      </div>
      <div className="w-3/4 border flex flex-col items-center mb-8">
        {(isRestaurant && (
          <RestaurantInfo currentRestaurant={currentRestaurant} />
        )) ||
          (isCategories && (
            <CurrentCategories restId={currentRestaurant.id} />
          )) || <Orders />}
      </div>
    </div>
  );
}

export default CurrentRestaurant;
