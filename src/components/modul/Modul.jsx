import React, { useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import SignUp from "./SignUp";
import Login from "./Login";

function Modul({
  modul,
  setModul,
  showSigns,
  setShowSigns,
  showLogin,
  setShowLogin,
  setPerson,
}) {
  const modulEl = useRef();
  const closedModul = (e) => {
    setModul(false);
  };
  return (
    <div
      className={`${
        modul ? "h-screen" : "h-0"
      } w-screen bg-[#20212554] z-20 fixed bottom-0 left-0 flex items-end sm:items-center justify-center  transition-all linear duration-300 overflow-hidden`}
      onClick={closedModul}
    >
      <div
        className="h-[95vh] w-full sm:w-3/5 lg:w-1/3 !bg-white rounded-xl relative flex justify-start flex-col items-center py-20"
        ref={modulEl}
        onClick={(e) => e.stopPropagation()}
      >
        <AiFillCloseCircle
          className="absolute right-5 top-5 text-4xl cursor-pointer"
          onClick={() => setModul(false)}
        />
        {(showSigns && (
          <SignUp setShowSigns={setShowSigns} setShowLogin={setShowLogin} />
        )) ||
          null}
        {showLogin && <Login setPerson={setPerson} setModul={setModul} />}
      </div>
    </div>
  );
}

export default Modul;
