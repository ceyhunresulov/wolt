import Categories from "../components/categories/Categories";
import Restaurants from "../components/restaurants/Restaurants";

function Home() {
  return (
    <div className="!mt-40 w-mobil mx-auto md:w-desktop">
      <h1 className="font-title  text-5xl text-thirdColor mb-8">
        Restoranlar-Bakı
      </h1>
      <Categories />
      <ul className="w-full md:flex justify-between flex-wrap mt-80">
        <Restaurants />
      </ul>
    </div>
  );
}

export default Home;
