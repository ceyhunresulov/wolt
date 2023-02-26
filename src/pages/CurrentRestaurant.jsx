import FirstSection from "../components/currentRestaurant/FirstSection";
import Nav from "../components/currentRestaurant/Nav";
import Products from "../components/currentRestaurant/Products";
import RestaurantInfo from "../components/currentRestaurant/RestaurantInfo";
import SearchBar from "../components/currentRestaurant/SearchBar";

function CurrentRestaurant() {
  return (
    <>
      <FirstSection />
      <div className="w-desktop pt-8 box-border lg:pt-8 lg:w-smTablet mx-auto lg:relative">
        <SearchBar />

        <div className="w-full lg:pt-24 box-border lg:flex justify-between">
          <Nav />
          <div className="lg:w-1/2">
            <Products />
          </div>
          <div className="hidden lg:block w-3/12">
            <RestaurantInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentRestaurant;
