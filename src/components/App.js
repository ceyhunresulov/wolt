import "../App.css";
import Header from "./header/Header";
import Categories from "./categories/Categories";
import Restaurants from "./restaurants/Restaurants";
import Footer from "./footer/Footer";
import Modul from "./modul/Modul";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Restaurant from "./persons/restaurant/Restaurant";
import RestaurantMenu from "./restaurantMenu/RestaurantMenu";

function App() {
  const [modul, setModul] = useState(false);
  const [showSigns, setShowSigns] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [person, setPerson] = useState(
    JSON.parse(localStorage.getItem("currentPerson") || false)
  );
  return (
    <>
      <Routes>
        <Route
          path="/owner"
          element={
            <>
              <Header
                checkLink={false}
                modul={modul}
                setModul={setModul}
                setShowSigns={setShowSigns}
                setShowLogin={setShowLogin}
                person={person}
                setPerson={setPerson}
              />
              <Restaurant />
            </>
          }
        />
        <Route
          path="/restaurant"
          element={
            <>
              <Header
                checkLink={true}
                modul={modul}
                setModul={setModul}
                setShowSigns={setShowSigns}
                setShowLogin={setShowLogin}
                person={person}
                setPerson={setPerson}
              />
              <Modul
                modul={modul}
                setModul={setModul}
                showSigns={showSigns}
                setShowSigns={setShowSigns}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                setPerson={setPerson}
              />
              <RestaurantMenu />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header
                modul={modul}
                setModul={setModul}
                setShowSigns={setShowSigns}
                setShowLogin={setShowLogin}
                person={person}
                setPerson={setPerson}
              />
              <Modul
                modul={modul}
                setModul={setModul}
                showSigns={showSigns}
                setShowSigns={setShowSigns}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                setPerson={setPerson}
              />
              <Categories />
              <Restaurants />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
