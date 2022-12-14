import "../App.css";
import Header from "./header/Header";
import Categories from "./categories/Categories";
import Restaurants from "./restaurants/Restaurants";
import Footer from "./footer/Footer";
import Modul from "./modul/Modul";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
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
      <Header
        modul={modul}
        setModul={setModul}
        setShowSigns={setShowSigns}
        setShowLogin={setShowLogin}
        person={person}
        setPerson={setPerson}
      />
      <Routes>
        <Route path="/admin" element={<Admin person={person} />} />
        <Route path="/restaurant"  element={<RestaurantMenu />} />
        <Route
          path="/"
          element={
            <>
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
