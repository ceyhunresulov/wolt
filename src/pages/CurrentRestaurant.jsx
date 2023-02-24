import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentRestaurant } from "../redux/actions/restaurantsAction";
import { IoBicycleSharp } from "react-icons/io5";
import Header from "../components/header/Header";
import { menuHeaderStyleAction } from "../redux/actions/headerStyleAction";

function CurrentRestaurant() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [restaurant] = useSelector((state) => state.restaurants);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(window.pageYOffset, 0);
    dispatch(getCurrentRestaurant(+id));
    dispatch(menuHeaderStyleAction());
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 80) setScroll(true);
      else setScroll(false);
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  
  return (
    <div
      style={{
        backgroundImage: `url(${restaurant.img})`,
      }}
      className="w-full h-[96vh] relative bg-no-repeat bg-center bg-cover flex flex-col items-center"
    >
      <div className="w-full h-full bg-gray-900 opacity-40 absolute left-0 top-0"></div>

      <div
        className={`w-full fixed bottom-6  lg:h-18 z-20 flex box-border left-0 justify-center ${
          scroll ? "lg:fixed lg:top-0 lg:bg-white" : "lg:absolute lg:top-20"
        }`}
      >
        <div
          className={`w-desktop lg:w-smTablet transition-all ease-in duration-300 border-[#2021251f] border-white flex justify-between items-center h-full ${
            scroll ? "text-thirdColor" : "text-white"
          }`}
        >
          <div className="hidden lg:flex items-center w-1/3">
            <IoBicycleSharp className="text-3xl" />
            <span className="text-base ml-4">
              Ortalama çatdırılma vaxtı{" "}
              <span className="font-bold">20 – 30 dəqiqədir</span>
            </span>
          </div>
          <div className="w-1/3 hidden lg:flex justify-center">
            <p className="text-base">
              Bu gün açıqdır:{" "}
              <span className="font-bold">{restaurant.worktime}</span>
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex justify-end">
            <button
              className={`bg-firstColor text-white h-12 lg:h-14 w-full lg:w-64 rounded-lg px-4 box-border flex justify-between items-center ${
                false ? "invisible" : ""
              }`}
            >
             <div>
                 <span className="bg-white text-firstColor font-semibold px-2 rounded-full">
                   {/* {orders.reduce((init, curr) => init + curr.count, 0)} */}3
                 </span>
                 <span className="font-semibold ml-2">Sifarişə baxın</span>
             </div>
              <span className="font-semibold">
                {/* {orders.reduce((init, curr) => init + curr.price * curr.count, 0)} */}
                7.00 AZN
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentRestaurant;
