import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateRestaurant from "./CreateRestaurant";
import CurrentRestaurant from "./CurrentRestaurant";

function Restaurant() {
  const [currentRestaurant, setCurrentRestaurant] = useState([]);
  useEffect(() => {
    const fetchRestaurant = async () => {
      const currentPerson = await JSON.parse(
        localStorage.getItem("currentPerson")
      );
      const { data: restaurants } = await axios.get(
        "http://localhost:3000/restaurants"
      );
      setCurrentRestaurant(
        restaurants.find((item) => item.ownerId === currentPerson.id) || false
      );
    };
    fetchRestaurant();
  }, []);
  return (
    <div className="min-h-screen">
      {(!currentRestaurant && <CreateRestaurant />) || (
        <CurrentRestaurant currentRestaurant={currentRestaurant} />
      )}
    </div>
  );
}

export default Restaurant;
