import React from "react";

function CategoryItem({ name, img }) {
  return (
    <li className="w-[140px] md:w-[180px] lg:w-[230px] rounded-lg overflow-hidden shadow mr-4 h-[95%] cursor-pointer hover:scale-105 transition-all duration-200 ease-in">
      <div className="w-full h-2/3 lg:h-3/4">
        <img
          src={require(`../../assets/images/${img}`)}
          alt=""
          className="w-full h-full"
        />
      </div>
      <h3 className="mt-2.5 ml-4">{name}</h3>
      <span className="mt-2.5 block ml-4">100</span>
    </li>
  );
}

export default CategoryItem;
