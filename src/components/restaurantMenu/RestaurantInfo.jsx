import React from "react";

function RestaurantInfo({restaurant}) {
  return (
    <>
      <h1 className="text-xl font-semibold text-[#202125] mb-8">
        Restoran məlumatları
      </h1>
      <h2 className="text-base font-semibold text-[#202125] mb-2">Ünvan</h2>
      <p>{restaurant.address}</p>
      <p>əlaqə:{restaurant.contact}</p>
    </>
  );
}

export default RestaurantInfo;
