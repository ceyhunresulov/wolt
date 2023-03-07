import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetBasketAction } from "../../redux/actions/basketAction";

function SearchItem({ restaurant }) {
  const dispatch = useDispatch();

  const clickRestaurant = () => {
    dispatch(resetBasketAction());
  };
  return (
    <Link
      onClick={clickRestaurant}
      to={`/${restaurant.id}`}
      className="flex p-3 sm:p-6 box-border border-b w-full cursor-pointer group"
    >
      <div className="h-20 w-32 sm:h-24 sm:w-36">
        <img
          src={restaurant.img}
          alt=""
          className="h-full w-full object-cover rounded"
        />
      </div>
      <div className="flex flex-col justify-center ml-6 w-1/2 ">
        <h2 className="font-medium text-lg sm:text-xl text-thirdColor group-hover:text-firstColor">
          {restaurant.name}
        </h2>

        <span className="text-base sm:text-lg text-secondaryColor">
          {restaurant.description}
        </span>
        <span className="text-xs sm:text-sm text-secondaryColor">
          {restaurant.address}
        </span>
      </div>
    </Link>
  );
}

export default SearchItem;
