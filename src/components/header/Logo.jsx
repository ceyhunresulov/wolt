import { IoLocation } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import WoltLogo from "../logo/WoltLogo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { modalAddressAction } from "../../redux/actions/modalAction";

function Logo({ address, logoColor, customerBox }) {
  const [addressBar, setAddressBar] = useState(true);
  const dispatch = useDispatch();

  const openAddressModal = () => {
    dispatch(modalAddressAction());
  };

  useEffect(() => {
    const checkScroll = () => {
      if (Math.trunc(window.scrollY) > 100) setAddressBar(false);
      else if (Math.trunc(window.scrollY) <= 100) setAddressBar(true);
    };
    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  });
  return (
    <div className="1/4 md:w-1/3 flex-1 md:flex items-center relative">
      <Link to="/" className="h-full flex items-center">
        <WoltLogo dark={logoColor} />
      </Link>
      <div
        onClick={openAddressModal}
        className={`customer ${customerBox} ${
          addressBar
            ? "h-28 xs:h-[30] md:h-full"
            : "h-[57px] xs:h-[61px] md:h-full"
        }`}
      >
        <div className="flex items-center  sm:w-tablet w-desktop md:w-auto group">
          <div className="bg-bgFirst group-hover:bg-bgFirstHover w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center  transition ease-linear duration-200">
            <IoLocation className="text-2xl text-firstColor" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-secondaryColor text-sm">Kimə çatdırılacaq</p>
            <span className="text-firstColor text-sm font-medium">Bakı</span>
          </div>
          <IoIosArrowDown className="ml-4 text-firstColor text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
