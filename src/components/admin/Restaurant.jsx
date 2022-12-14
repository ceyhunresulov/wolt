import React from "react";

function Restaurant() {
  return (
    <div className="flex flex-col w-1/3">
      <h1 className="text-3xl font-700 p-4">Restaurant</h1>
      <form action="" className="flex flex-col">
        <input
          type="text"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          placeholder="Restaurant Name"
        />
        <input
          type="text"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          placeholder="Restaurant Address"
        />
        <input
          type="text"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          placeholder="Contact"
        />
        <input
          type="date"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          placeholder="Worktime"
        />
        <input
          type="file"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          placeholder="Restaurant Image"
        />
      </form>
      <div className="border w-full">
        <div className="w-full h-[200px]">
          <img src="rest.avif" alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
