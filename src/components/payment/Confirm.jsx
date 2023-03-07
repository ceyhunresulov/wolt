import { useEffect, useRef, useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Confirm() {
  const navigate = useNavigate();
  const El = useRef();
  const basket = useSelector((state) => state.basket);
  const gift = useSelector((state) => state.gift);
  const [fixed, setFixed] = useState("top");
  const [confirm, setConfirm] = useState(false);

  const confirmOrders = () => {
    setConfirm(true);
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  useEffect(() => {
    const getTopEl = () => {
      if (
        window.scrollY > 360 &&
        window.scrollY < El.current.parentElement.clientHeight - 100
      ) {
        setFixed("fixed");
      } else if (window.scrollY > El.current.parentElement.clientHeight-100) {
        setFixed("bottom");
      } else {
        setFixed("top");
      }
    };
    window.addEventListener("scroll", getTopEl);

    return () => window.removeEventListener("scroll", getTopEl);
  });
  return (
    <div
      ref={El}
      className={`lg:border shadow-lg rounded-3xl mt-16 lg:mt-0 lg:p-8 w-full block box-border text-thirdColor z-30 bg-white ${
        fixed === "fixed"
          ? "lg:fixed top-28 lg:w-[450px]"
          : fixed === "top"
          ? "lg:absolute -top-24"
          : "lg:absolute bottom-20"
      }`}
    >
      <div className="w-full rounded-3xl border lg:border-none p-8 lg:p-0 box-border ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-fredoka text-2xl lg:text-3xl">
            Qiymətlər AZN ilədir, vergilər daxildir
          </h1>
          <IoInformationCircleOutline className="text-2xl lg:text-4xl text-firstColor" />
        </div>
        <ul className="text-base font-semibold">
          <li className="flex justify-between items-center py-2">
            <span>Aralıq cəm ({basket.length} məhsul)</span>
            <span>
              {basket
                .reduce((total, curr) => (total += curr.count * curr.price), 0)
                .toFixed(2)}
            </span>
          </li>
          <li className="flex justify-between items-center py-2">
            <span>Çatdırılma</span>
            <span>Pulsuz</span>
          </li>
          <li className="w-3/4">
            <span className="font-normal text-sm text-secondaryColor">
              Hər Wolt çatdırılmasında 100% karbon emissiyası kompensasiya
              olunur.{" "}
              <a href="#" className="font-bold text-[#1fc70a]">
                {" "}
                Daha ətraflı
              </a>
            </span>
          </li>
          <li className="flex justify-between items-center py-2 pt-2 pb-4 border-b">
            <span>Xidmət haqqı</span>
            <span>0.20</span>
          </li>
          <li
            className={`flex justify-between items-center transition-all ease-linear duration-100  ${
              gift < 1 ? "h-0 overflow-hidden p-0" : "pt-4"
            }`}
          >
            <span>Kuryerə bəxşiş vermək</span>
            <span>{gift.toFixed(2)}</span>
          </li>
        </ul>
      </div>
      <button
        onClick={confirmOrders}
        className={`flex justify-center items-center w-full mt-8 h-20 lg:h-28 rounded-md ${
          confirm ? "bg-white border-2 border-[#1fc70a]" : "bg-secondaryColor"
        }`}
      >
        {(confirm && (
          <span className="text-[#1fc70a] text-xl font-semibold">
            Sifarişlər Təstiqləndi
          </span>
        )) || (
          <span className="text-white text-lg lg:text-xl font-semibold">
            Sifarişləri Təstiqləyin
          </span>
        )}
      </button>
    </div>
  );
}

export default Confirm;
