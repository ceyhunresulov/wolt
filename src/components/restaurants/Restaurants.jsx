
import {  useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);


  return (
    <div className="!mt-16 w-mobil mx-auto md:w-full">
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
