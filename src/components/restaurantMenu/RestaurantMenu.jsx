import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import CategoriesList from "./CategoriesList";
import Product from "./Product";
import RestaurantInfo from "./RestaurantInfo";
import Orders from "./Orders";

function RestaurantMenu() {
  const workTime = useRef();
  const workTimeEl = useRef();
  const categoriesEl = useRef();
  const [productModal, setProductModal] = useState(true);
  const [orders, setOrders] = useState([]);
  const [orderModal, setOrderModal] = useState(false);
  const [clickedProduct, setCLickedProduct] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
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
  const showOrders = () => {
    setOrderModal(true);
    setProductModal(false);
  };
  useEffect(() => {
    window.scrollTo(window.pageYOffset, 0);
    const currentRestaurant = JSON.parse(
      localStorage.getItem("currentRestaurant")
    );
    const fetchData = async () => {
      const { data: categoriesData } = await axios.get(
        `http://localhost:3000/categories`
      );
      const { data: productsData } = await axios.get(
        "http://localhost:3000/products"
      );
      const newData = categoriesData.filter((item) =>
        item.restId.includes(currentRestaurant.id)
      );
      const filteredProducts = productsData.filter((product) =>
        product.restId.includes(currentRestaurant.id)
      );
      setCategories(newData || []);
      setProducts(filteredProducts || []);
      setRestaurant(currentRestaurant);
    };
    fetchData();
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
  return (
    <>
      <Orders
        product={clickedProduct}
        orderModal={orderModal}
        setOrderModal={setOrderModal}
        orders={orders}
        setOrders={setOrders}
        productModal={productModal}
      />
      <div
        className="relative w-full h-[96vh] bg-no-repeat bg-center bg-cover flex justify-center"
        style={{
          backgroundImage: `url(${restaurant.img})`,
        }}
      >
        <div className="w-full h-full bg-gray-900 opacity-25 absolute left-0 top-0"></div>
        <div className="lg:w-3/4 h-4/5 pt-[70px] box-border relative">
          <div
            ref={workTimeEl}
            className="transition-all ease-in duration-300 border-[#2021251f] w-full flex justify-around top-0 left-0 items-center h-[70px] z-40"
          >
            <p ref={workTime} className="text-white text-base font-bold">
              Bu gün açıqdır: {restaurant.worktime}
            </p>
            <button
              onClick={showOrders}
              className={`bg-blue h-14 w-64 rounded-lg px-4 box-border flex justify-between items-center ${
                !orders.length ? "invisible" : ""
              }`}
            >
              <span className="bg-white px-2 rounded-full text-blue">
                {orders.reduce((init, curr) => init + curr.count, 0)}
              </span>
              <span className="font-semibold text-white">Sifarişə baxın</span>
              <span className="font-semibold text-white">
                {orders.reduce(
                  (init, curr) => init + curr.price * curr.count,
                  0
                )}{" "}
                AZN
              </span>
            </button>
          </div>
          <div className="w-3/4 absolute bottom-0 left-0">
            <h1 className="text-white text-7xl font-cursive font-black mb-4 leading-relaxed">
              {restaurant.name}
            </h1>
            <p className="text-3xl text-white font-bold">
              {restaurant.description}
            </p>
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
      <div className="w-3/4 mx-auto mt-14 border-black flex pt-20 relative justify-between">
        <ul
          ref={categoriesEl}
          className="w-1/12 h-full sticky top-32 flex flex-col items-start"
        >
          {categories.map((category) => (
            <CategoriesList
              key={category.id}
              category={category}
              categoriesEl={categoriesEl.current.children}
            />
          ))}
        </ul>
        <div className="w-3/5 h-full px-4 transition-all linear duration-300">
          {categories.map((item) => (
            <section
              key={item.id}
              id={item.name}
              className="bg-black-500 pt-24 border-box min-h-screen"
            >
              <h2 className="text-3xl my-8 font-bold">{item.name}</h2>
              {products
                .filter((product) => product.catId === item.id)
                .map((item) => (
                  <Product
                    key={item.id}
                    product={item}
                    restaurant={restaurant}
                    setCLickedProduct={setCLickedProduct}
                    setOrderModal={setOrderModal}
                    setProductModal={setProductModal}
                  />
                ))}
            </section>
          ))}
        </div>
        <div className="w-1/4 h-full sticky top-32">
          <RestaurantInfo restaurant={restaurant} />
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
