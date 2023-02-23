
import {  useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);


  return (
    <div className="mx-auto w-full">
      <h2 className="font-fredoka text-3xl text-thirdColor mb-4">Bütün restoranlar</h2>
      <ul className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
