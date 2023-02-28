import React from "react";
import { useSelector } from "react-redux";

function RestaurantInfo() {
  const restaurant = useSelector((state) => state.restaurants)[0];
  return (
    <div className="text-thirdColor">
      <h1 className="text-xl font-bold mb-8">Restoran məlumatları</h1>

      <div className="flex flex-col mb-4">
        <h2 className="text-lg font-semibold">Ünvan</h2>
        <span>Baku,</span>
        <span>{restaurant?.address}</span>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Çatdırılma saatları</h2>
        <ul>
          <li className="w-full mb-2 flex justify-between">Bazar ertəsi <span >00:00–01:00</span></li>
          <li className="w-full mb-2 flex justify-between">Çərşənbə axşamı-Şənbə <span >12:00–01:00</span></li>
          <li className="w-full mb-2 flex justify-between">Bazar günü <span >12:00–24:00</span></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Əlaqə</h2>
        <span>{restaurant.contact}</span>
      </div>

    </div>
  );
}

export default RestaurantInfo;
