import SearchBar from "./SearchBar";

import Logo from "./Logo";
import LoginBtns from "./LoginBtns";
import LoginMobil from "./LoginMobil";

function Header() {
  return (
    <header className="header">
      <div className="flex justify-between h-full w-desktop sm:w-tablet md:w-desktop bg-white">
        <Logo />
        <SearchBar />
        <LoginBtns />
        <LoginMobil />
      </div>
    </header>
  );
}

export default Header;
