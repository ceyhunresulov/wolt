import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantItem from "./RestaurantItem";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/restaurants").then((res) => {
      setRestaurants(res.data || []);
    });
  }, []);

  return (
    <div id="container" className="!mt-16 sm:bg-red">
      <h2 className="text-3xl font-semibold !my-5">Bütün Restoranlar</h2>
      <ul className="w-full md:flex justify-between flex-wrap">
        {restaurants.map((restaurant) => (
          <RestaurantItem
            restaurant={restaurant}
            key={restaurant.id}
            img={restaurant.img}
            name={restaurant.name}
            desc={restaurant.description}
            courierMoney={restaurant.courierMoney}
          />
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
