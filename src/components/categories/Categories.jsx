import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryItem from "./CategoryItem";
import { Navigation } from "swiper";

import "swiper/css";

function Categories() {
  const categories = useSelector((state) => state.categories);
  const [checkScroll, setCheckScroll] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  const leftClick = () => setDisabledRight(false);

  const rightClick = () => setCheckScroll(false);

  return (
    <>
      <div className="mx-auto w-full mb-4 ">
        <div className="flex justify-between items-center mt-12">
          <h3 className="font-fredoka text-3xl text-thirdColor">
            Kateqoriyalar
          </h3>
          <div className="flex">
            <button
              onClick={leftClick}
              disabled={checkScroll}
              className={`left text-[32px] font-semibold bg-bgFirst w-10 h-10 justify-center items-center box-content rounded-full m-1 hidden xxl:flex ${
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
              onClick={rightClick}
              disabled={disabledRight}
              className={`right text-[32px] font-semibold bg-bgFirst hover:bg-bgFirstHover w-10 h-10 justify-center items-center box-content rounded-full m-1 hidden xxl:flex ${
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

      <Swiper
        className="!overflow-visible !touch-pan-x"
        modules={[Navigation]}
        navigation={{
          nextEl: ".right",
          prevEl: ".left",
        }}
        spaceBetween={15}
        slidesPerView={3}
        onReachEnd={() => categories.length > 6 && setDisabledRight(true)}
        onReachBeginning={() => setCheckScroll(true)}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryItem name={category.name} img={category.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Categories;
