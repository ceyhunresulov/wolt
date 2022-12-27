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
      className={
        modul
          ? "h-screen w-screen bg-[#20212554] z-20 fixed bottom-0 left-0 flex items-center justify-center transition-all linear duration-500 overflow-hidden transition-all linear duration-300"
          : "w-screen h-0 transition-all linear duration-300 bg-[#20212554] z-20 fixed bottom-0 left-0 flex items-center justify-center overflow-hidden"
      }
      onClick={closedModul}
    >
      <div
        className="h-auto w-3/5 md:w-2/5 lg:h-5/6 lg:w-1/3 !bg-white rounded-xl relative flex justify-start flex-col items-center py-20"
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
        {showLogin && <Login setPerson={setPerson} />}
      </div>
    </div>
  );
}

export default Modul;
