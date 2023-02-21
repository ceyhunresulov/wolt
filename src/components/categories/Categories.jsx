import React, { useEffect, useRef } from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { useState } from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const parentEL = useRef();
  const categoriesBox = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ofsetLeft, setOfsetLeft] = useState();
  const [marginCategory, setMarginCategory] = useState();
  const [categoryWidth, setCategoryWidth] = useState();
  const [checkScroll, setCheckScroll] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);
  const [positionLeft, setPositonLeft] = useState();
  const [scrollValue, setScrollValue] = useState();
  const [lastRightWidth, setLastRightWidth] = useState(false);

  const scrollLeft = () => {
    const el = categoriesBox.current;
    const outRightWidth =
      categoriesBox.current.clientWidth - (positionLeft + scrollValue);

    if (outRightWidth < scrollValue) {
      el.style.left = -(positionLeft + outRightWidth - ofsetLeft) + "px";
      setPositonLeft(positionLeft + outRightWidth - ofsetLeft);
      setDisabledRight(true);
      setLastRightWidth(outRightWidth - ofsetLeft);
    } else {
      el.style.left = -(positionLeft + scrollValue) + "px";
      setPositonLeft(positionLeft + scrollValue);
    }

    setCheckScroll(false);
  };

  const scrollRight = () => {
    const el = categoriesBox.current;

    if (lastRightWidth) {
      el.style.left = -(positionLeft - lastRightWidth) + "px";
      setPositonLeft(positionLeft - lastRightWidth);
      setLastRightWidth(false);
    } else {
      el.style.left = -(positionLeft - scrollValue) + "px";
      setPositonLeft(positionLeft - scrollValue);
    }

    if (parseInt(el.style.left) > 0) setCheckScroll(true);

    setDisabledRight(false);
  };

  useEffect(() => {
    let viewCategoryCount = 6;
    let categoryMargin = 15;

    if (windowWidth < 450) {
      viewCategoryCount = 3;
      categoryMargin = 8;
    } else if (windowWidth < 640) {
      viewCategoryCount = 3;
      categoryMargin = 10;
    } else if (windowWidth < 1024) {
      viewCategoryCount = 4;
      categoryMargin = 12;
    } else if (windowWidth < 1280) {
      viewCategoryCount = 5;
      categoryMargin = 13;
    }

    const containerWith = parentEL.current.clientWidth + categoryMargin;
    const categoryWidth = containerWith / viewCategoryCount - categoryMargin;

    setOfsetLeft(parentEL.current.offsetLeft);
    setMarginCategory(categoryMargin);
    setCategoryWidth(categoryWidth);
    setScrollValue(containerWith);
    setPositonLeft(-parentEL.current.offsetLeft);

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  return (
    <>
      <div ref={parentEL} className="mx-auto w-mobil md:w-full ">
        <div className="flex justify-between items-center mt-12">
          <h3 className="font-bold text-2xl text-thirdColor">Kateqoriyalar</h3>
          <div className="flex">
            <button
              disabled={checkScroll}
              onClick={scrollRight}
              className={`scroll-right text-xl lg:text-[32px] font-semibold bg-bgFirst w-10 h-10 justify-center items-center box-content rounded-full m-1 hidden xxl:flex ${
                checkScroll
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:bg-bgFirstHover"
              }`}
            >
              <TbArrowNarrowLeft
                className={`p-0 m-0 ${
                  checkScroll
                    ? "text-[#009de050]"
                    : "text-[#009DE0] font-extrabold"
                }`}
              />
            </button>
            <button
              disabled={disabledRight}
              onClick={scrollLeft}
              className={`scroll-left text-xl lg:text-[32px] font-semibold bg-bgFirst hover:bg-bgFirstHover w-10 h-10 justify-center items-center box-content rounded-full m-1 hidden xxl:flex ${
                disabledRight ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <TbArrowNarrowRight
                className={` ${
                  disabledRight
                    ? "text-[#009de050]"
                    : "text-[#009DE0] font-extrabold"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

       <ul
         ref={categoriesBox}
         style={{
           height: `${categoryWidth * (windowWidth < 450 ? 1.8 : 1.4)}px`,
         }}
         className={`flex touch-pan-x absolute top-80 transition-all ease-out duration-200 left-[${ofsetLeft}px]`}
       >
         {categories.map((category) => (
           <CategoryItem
             key={category.id}
             name={category.name}
             img={category.image}
             margin={marginCategory}
             width={categoryWidth}
           />
         ))}
       </ul>

       <div className="w-64 h-64 overflow-scroll snap-x mt-96 relative">
        <div className="absolute flex items-center snap-center touch-pan-x">
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
          <div className="bg-black snap-center mx-4 w-64 h-64"></div>
        </div>
       </div>
    </>
  );
}

export default Categories;
