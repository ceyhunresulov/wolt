import SearchBar from "./SearchBar";

import Logo from "./Logo";
import LoginBtns from "./LoginBtns";
import LoginMobil from "./LoginMobil";
import { useSelector } from "react-redux";

function Header() {
  const style = useSelector((state) => state.style);
  return (
    <header
      className={`header ${style.position} ${style.backgroundColor} ${style.border}`}
    >
      <div className={`flex justify-between h-full w-desktop sm:w-tablet md:w-desktop ${style.width}`}>
        <Logo logoColor={style.logoColor} customerBox={style.customerBox} />
        <SearchBar
          bgSearch={style.bgSearch}
          textColor={style.textColor}
          placeholder={style.placeholder}
          searchWidth={style.searchWidth}
        />
        <LoginBtns textColor={style.textColor} />
        <LoginMobil />
      </div>
    </header>
  );
}

export default Header;
