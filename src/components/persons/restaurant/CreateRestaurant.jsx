import React from "react";

function CreateRestaurant() {
  return (
    <div className="pt-20 box-border bg-gray-200 w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="p-5 flex flex-col justify-center min-w-[30%] border-[#009DE0] bg-white"
      >
        <h1 className="text-2xl font-semibold text-[#009DE0] mb-3 text-center">
          Add Restaurant
        </h1>
        <input
          type="text"
          placeholder="Restaurant name"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Image Link"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Address"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Info"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Courier Money"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Contact"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <input
          type="text"
          placeholder="Worktime"
          className="text-xl p-2 mb-3 border focus:border-[#009DE0] focus:outline-none focus:border-2 rounded transition-all ease-linear duration-300 outline-none "
        />
        <button
          type="submit"
          className="w-full bg-[#009DE0] text-white p-2 rounded "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateRestaurant;
