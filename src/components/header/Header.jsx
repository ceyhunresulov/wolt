import SearchBar from "./SearchBar";

import Logo from "./Logo";
import LoginBtns from "./LoginBtns";
import LoginMobil from "./LoginMobil";
import { useSelector } from "react-redux";

function Header() {
  const style = useSelector((state) => state.style);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <header
      className={`header ${style.position} ${style.backgroundColor} ${style.border}`}
    >
      <div
        className={`flex justify-between h-full w-mobil md:w-desktop ${style.width} ${style.backgroundColor}`}
      >
        <Logo logoColor={style.logoColor} customerBox={style.customerBox} />
        <SearchBar
          bgSearch={style.bgSearch}
          textColor={style.textColor}
          placeholder={style.placeholder}
          searchWidth={style.searchWidth}
        />
        <LoginMobil />
        <LoginBtns textColor={style.textColor} />
      </div>
    </header>
  );
}

export default Header;
