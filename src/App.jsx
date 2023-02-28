import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CurrentRestaurant from "./pages/CurrentRestaurant";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="overflow-x-hidden relative">
      <Header />
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CurrentRestaurant />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
