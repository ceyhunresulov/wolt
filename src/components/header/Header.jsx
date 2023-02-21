import React, { useState } from "react";
import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";
import Logo from "./Logo";
import LoginBtns from "./LoginBtns";

function Header() {
  return (
    <header
      className={`border border-[#2021251f] h-18 w-full fixed top-0 left-0 z-10 flex justify-center bg-white`}
    >
      <div className="flex h-full w-desktop">
        <Logo />
        <SearchBar />
        <LoginBtns />
      </div>
    </header>
  );
}

export default Header;
