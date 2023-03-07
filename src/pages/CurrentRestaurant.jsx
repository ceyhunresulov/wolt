import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FirstSection from "../components/currentRestaurant/FirstSection";
import Nav from "../components/currentRestaurant/Nav";
import Products from "../components/currentRestaurant/Products";
import RestaurantInfo from "../components/currentRestaurant/RestaurantInfo";
import SearchBar from "../components/currentRestaurant/SearchBar";
import { openConfirmModalAction } from "../redux/actions/confirmModalAction";
import { menuHeaderStyleAction } from "../redux/actions/headerStyleAction";
function CurrentRestaurant() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuHeaderStyleAction());

    const checkBasket = JSON.parse(localStorage.getItem("basket"));
    if (checkBasket) {
      dispatch(openConfirmModalAction());
    }
  }, []);
  console.log('salam')
  return (
    <>
      <FirstSection />
      <div className="w-mobil md:w-desktop pt-8 box-border lg:pt-8 lg:w-smTablet mx-auto lg:relative">
        <SearchBar />

        <div className="w-full lg:pt-24 box-border lg:flex justify-between">
          <Nav />
          <div className="lg:w-1/2">
            <Products />
          </div>
          <div className="w-full bg-bgSecondaryLight lg:bg-transparent my-16 px-4 py-8 box-border lg:p-0 lg:m-0 lg:w-3/12 rounded-lg">
            <RestaurantInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentRestaurant;
