import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import CategoriesList from "./CategoriesList";
import RestaurantInfo from "./RestaurantInfo";

function RestaurantMenu() {
  const workTime = useRef();
  const workTimeEl = useRef();
  const categoriesEl = useRef();
  const [categories, setCategories] = useState([]);
  const [restaurant, setRestaurant] = useState({ img: "rest5.avif" });
  const [closeIcon, setCloseIcon] = useState(false);
  const [border, setBorder] = useState(false);
  const showCloseIcon = (e) => {
    if (e.target.value.length > 0) setCloseIcon(true);
    else setCloseIcon(false);
  };
  const showBorder = () => {
    setBorder(true);
  };
  const hiddenBorder = () => {
    setBorder(false);
  };
  useEffect(() => {
    window.scrollTo(window.pageYOffset,0)
    const fetchData = async () => {
      const { data: data } = await axios.get(
        "http://localhost:3000/categories"
      );
      setCategories(data || []);
    };
    fetchData();
    setRestaurant(JSON.parse(localStorage.getItem("currentRestaurant")));
  }, []);
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 70) {
        workTimeEl.current.classList.add("fixed");
        workTimeEl.current.classList.add("bg-white");
        workTimeEl.current.classList.add("border-b");
        workTime.current.classList.remove("text-white");
        workTime.current.classList.add("text-black");
      } else {
        workTimeEl.current.classList.remove("fixed");
        workTimeEl.current.classList.remove("bg-white");
        workTime.current.classList.remove("text-black");
        workTime.current.classList.add("text-white");
        workTimeEl.current.classList.remove("border-b");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(restaurant.img);
  return (
    <>
      <div
        className="relative w-full h-[96vh] bg-no-repeat bg-center bg-cover flex justify-center"
        style={{
          backgroundImage: `url(${require(`../../assets/images/${restaurant.img}`)})`,
        }}
      >
        <div className="w-full h-full bg-gray-900 opacity-25 absolute left-0 top-0"></div>
        <div className="lg:w-3/4 h-4/5 pt-[70px] box-border relative">
          <div
            ref={workTimeEl}
            className="transition-all ease-in duration-300 border-[#2021251f] w-full flex justify-center top-0 left-0 items-center h-[70px] z-40"
          >
            <p ref={workTime} className="text-white text-base font-bold">
              Bu gün açıqdır: {restaurant.worktime}
            </p>
          </div>
          <div className="w-3/4 absolute bottom-0 left-0">
            <h1 className="text-white text-7xl font-cursive font-black mb-4 leading-relaxed">
              {restaurant.name}
            </h1>
            <p className="text-3xl text-white font-bold">{restaurant.description}</p>
          </div>
        </div>
        <div className="absolute w-3/4 h-[114px] bottom-[-57px] bg-white rounded-xl shadow-lg border flex items-center justify-center">
          <form
            action=""
            className={`bg-[#c8c8c833] w-[284px] h-[48px] border-2 rounded-md flex items-center justify-center ${
              border ? "border-[#009DE0] border-4 " : ""
            }`}
          >
            <AiOutlineSearch className="text-lg" />
            <input
              onFocus={showBorder}
              onBlur={hiddenBorder}
              onChange={showCloseIcon}
              type="text"
              placeholder="Axtarış"
              className="mx-2 w-3/4 bg-transparent focus:outline-0"
            />
            <AiOutlineCloseCircle
              className={`text-base ${closeIcon ? "visible" : "invisible"}`}
            />
          </form>
        </div>
      </div>
      <div className="border w-3/4 mx-auto mt-14 border-black flex pt-20 relative">
        <ul
          ref={categoriesEl}
          className="w-1/4 h-full sticky top-32 flex flex-col items-start"
        >
          {categories.map((category) => (
            <CategoriesList
              key={category.id}
              category={category}
              categoriesEl={categoriesEl.current.children}
            />
          ))}
        </ul>
        <div className="border w-2/4 h-full">
          <section id="Burger" className="h-[130vh] bg-red-500">
            salam
          </section>

          <section id="McCafe" className="h-[110vh] bg-black-500">
            salam
          </section>
          <section id="Kartof" className="h-[120vh] bg-cyan-500">
            salam
          </section>
        </div>
        <div className="border w-1/4 h-full">
          <RestaurantInfo restaurant={restaurant}/>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
