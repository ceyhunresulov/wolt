import Categories from "../components/categories/Categories";
import Restaurants from "../components/restaurants/Restaurants";
import Header from "../components/header/Header";

function Home() {
  return (
      <div className="!mt-40 w-mobil mx-auto sm:w-tablet md:w-desktop">
        <h1 className="font-fredoka w-2/3 text-5xl text-thirdColor mb-8">
          Restoranlar-Bakı
        </h1>
        <Categories />
        <ul className="w-full md:flex justify-between flex-wrap mt-6 lg:mt-24">
          <Restaurants />
        </ul>
      </div>
  );
}

export default Home;
