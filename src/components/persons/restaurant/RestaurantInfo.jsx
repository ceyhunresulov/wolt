import axios from "axios";
import React, { useEffect, useState } from "react";

function RestaurantInfo({ currentRestaurant }) {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const onHandleChange = (e) => {
    setRestaurantInfo({ ...restaurantInfo, [e.target.name]: e.target.value });
  };

  const onHandleSubmit = () => {
    axios.put(
      `http://localhost:3000/restaurants/${restaurantInfo.id}`,
      restaurantInfo
    );
  };

  useEffect(() => {
    setRestaurantInfo(currentRestaurant);
  }, [currentRestaurant]);
  return (
    <div className="flex w-full shadow-lg border box-border p-3">
      <ul className="w-1/2">
        <li className="w-2/3 h-auto">
          <img src={restaurantInfo.img} alt="" className="h-full w-full" />
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">Name:</span>
          <h2 className="text-2xl font-semibold ">{restaurantInfo.name}</h2>
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">address:</span>
          <h2 className="text-2xl font-semibold ">{restaurantInfo.address}</h2>
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">Description:</span>
          <h2 className="text-2xl font-semibold ">
            {restaurantInfo.description}
          </h2>
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">Contact:</span>
          <h2 className="text-2xl font-semibold ">{restaurantInfo.contact}</h2>
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">Worktime:</span>
          <h2 className="text-2xl font-semibold ">{restaurantInfo.worktime}</h2>
        </li>
        <li className="flex items-center p-3">
          <span className="text-xl mr-2">Courier:</span>
          <h2 className="text-2xl font-semibold ">
            {restaurantInfo.courierMoney}
          </h2>
        </li>
      </ul>
      <form
        action=""
        className="flex flex-col items-center w-1/2 box-border"
        onSubmit={onHandleSubmit}
      >
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.img || ""}
          name="img"
          placeholder="Image Link"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.name || ""}
          name="name"
          placeholder="Restaurant Name"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.address || ""}
          name="address"
          placeholder="Address"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.description || ""}
          name="description"
          placeholder="Description"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.contact || ""}
          name="contact"
          placeholder="Contact"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.worktime || ""}
          name="worktime"
          placeholder="Worktime"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <input
          onChange={onHandleChange}
          type="text"
          value={restaurantInfo.courierMoney || ""}
          name="courierMoney"
          placeholder="Courier Money"
          className={`text-xl border-2 border-cyan-200 focus:border-cyan-700 focus:outline-none outline-none transition-all ease-linear duration-200 rounded-md w-4/5 p-2 mb-4 box-border`}
        />
        <button
          type="submit"
          className="bg-cyan-300 hover:bg-cyan-500 py-1.5 px-2 rounded transition-all ease-linear duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default RestaurantInfo;
