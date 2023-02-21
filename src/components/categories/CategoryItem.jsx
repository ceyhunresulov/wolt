import React from "react";

function CategoryItem({ name, img, margin,width }) {
  return (
    <li
    style={{width: `${width}px`, marginRight: `${margin}px`}}
      className={`rounded-lg overflow-hidden shadow  h-full cursor-pointer hover:scale-[1.03] transition-all duration-200 ease-in group`}
    >
      <div className="w-full h-3/5 xs:h-2/3 md:h-3/4 overflow-hidden">
        <img
          src={require(`../../images/${img}`)}
          alt=""
          className="w-full h-full transition-all duration-200 ease-in group-hover:scale-[1.03]"
        />
      </div>
      <div className="h-2/5 xs:h-1/3 md:h-1/4 px-4 flex flex-col justify-center">
        <h3 className="text-[11px] sm:text-sm md:text-md lg:text-lg font-semibold text-thirdColor mb-[2px]">{name}</h3>
        <span className="text-[9px] sm:text-xs md:text-sm lg:text-md text-secondaryColor mt-[2px]">100 məkan</span>
      </div>
    </li>
  );
}

export default CategoryItem;
