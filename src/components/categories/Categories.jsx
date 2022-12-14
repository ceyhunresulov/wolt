import React, { useRef } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";

function Categories() {
  const categoriesContainer = useRef();
  const categoriesBox = useRef();
  const [categories, setCategories] = useState([]);
  const [checkScroll, setCheckScroll] = useState(0);
  const [disabledRight, setDisabledRight] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      setCategories(res.data || []);
    });
  }, []);

  const scrollLeft = () => {
    let categoriesContainerWidth = categoriesContainer.current.offsetWidth;
    let scrollSize = checkScroll - categoriesContainerWidth - 19;
    let categoriesBoxWidth = categoriesBox.current.offsetWidth;
    if (categoriesBoxWidth - -scrollSize < categoriesContainerWidth - 19) {
      setDisabledRight(categoriesBoxWidth - -scrollSize);
      setCheckScroll(checkScroll - (categoriesBoxWidth - -scrollSize));
    } else {
      setCheckScroll(scrollSize);
    }
  };

  const scrollRight = () => {
    let categoriesContainerWidth = categoriesContainer.current.offsetWidth;
    let scrollSize = checkScroll + categoriesContainerWidth + 19;
    if (disabledRight) {
      setCheckScroll(checkScroll + disabledRight);
    } else {
      setCheckScroll(scrollSize);
    }

    setDisabledRight(false);
  };

  useEffect(() => {
    categoriesBox.current.style.left = checkScroll + "px";
  }, [checkScroll]);

  return (
    <>
      <div id="container" className="!mt-48">
        <h1 className="font-cursive font-extrabold text-5xl mb-8">
          Restoranlar-Bakı
        </h1>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-3xl">kategoriyalar</h3>
          <div className="flex">
            <button
              disabled={checkScroll === 0}
              onClick={scrollRight}
              className="text-xl lg:text-2xl font-semibold bg-[#009de014]  p-1.5 lg:p-2.5 box-content rounded-full m-1 cursor-pointer "
            >
              <BsArrowLeft
                className={
                  checkScroll === 0
                    ? "text-[#009de050]"
                    : "text-[#009DE0] font-extrabold"
                }
              />
            </button>
            <button
              disabled={disabledRight}
              onClick={scrollLeft}
              className="text-xl lg:text-2xl font-semibold bg-[#009de014] p-1.5 lg:p-2.5 box-content rounded-full m-1 cursor-pointer"
            >
              <BsArrowRight
                className={
                  disabledRight
                    ? "text-[#009de050]"
                    : "text-[#009DE0] font-extrabold"
                }
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <div
          ref={categoriesContainer}
          className="relative h-[210px] md:h-[270px] lg:h-[350px]"
          id="container"
        >
          <ul
            ref={categoriesBox}
            className={`absolute top-0 left-[0px] h-full flex items-center transition-all linear duration-500 scroll-auto`}
          >
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                name={category.name}
                img={category.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Categories;
