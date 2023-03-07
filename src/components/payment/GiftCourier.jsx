import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { giftAction } from "../../redux/actions/giftAction";

function GiftCourier() {
  const gift = useSelector((state) => state.gift);
  const dispatch = useDispatch();
  const [hightGift, setHightGift] = useState(false);
  const selectGift = (value) => {
    dispatch(giftAction(value));
    if (value >= 6) setHightGift(true);
    else setHightGift(false);
  };

  return (
    <div className="w-full mb-16">
      <h1 className="text-2xl lg:text-3xl text-thirdColor font-fredoka mb-8">
        Kuryerə bəxşiş vermək
      </h1>
      <div className="w-full text-thirdColor border py-6 px-5 box-border text-sm md:text-base lg:text-[18px] rounded cursor-text">
        <div className="flex items-center justify-between text-secondaryColor text-[18px] mb-8 ">
          <p className="w-4/5">
            Çatdırılmadan sonra bəxşişin 100%-ni alacaqlar. Bəxşişi dəyişdirmək
            və ya ləğv etmək istəyirsinizsə, kömək üçün dəstək xidməti ilə əlaqə
            saxlayın.
          </p>
          <span>{gift} AZN</span>
        </div>
        <div className="flex justify-between w-full text-xs sm:text-sm">
          <button
            onClick={() => selectGift(0)}
            className={`border-2 w-1/6 h-8 flex justify-center items-center font-semibold hover:border-firstColor hover:bg-bgFirstHover transition-all ease-in duration-150 rounded-3xl ${
              gift === 0
                ? "border-firstColor text-firstColor bg-bgFirstHover"
                : "text-secondaryColor"
            }`}
          >
            <span>AZN 0</span>
          </button>
          <button
            onClick={() => selectGift(1)}
            className={`border-2 w-1/6 h-8 flex justify-center items-center  font-semibold hover:border-firstColor hover:bg-bgFirstHover transition-all ease-in duration-150 rounded-3xl ${
              gift === 1
                ? "border-firstColor text-firstColor bg-bgFirstHover"
                : "text-secondaryColor"
            }`}
          >
            <span>AZN 1</span>
          </button>
          <button
            onClick={() => selectGift(2)}
            className={`border-2 w-1/6 h-8 flex justify-center items-center  font-semibold hover:border-firstColor hover:bg-bgFirstHover transition-all ease-in duration-150 rounded-3xl ${
              gift === 2
                ? "border-firstColor text-firstColor bg-bgFirstHover"
                : "text-secondaryColor"
            }`}
          >
            <span>AZN 2</span>
          </button>
          <button
            onClick={() => selectGift(3)}
            className={`border-2 w-1/6 h-8 flex justify-center items-center font-semibold hover:border-firstColor hover:bg-bgFirstHover transition-all ease-in duration-150 rounded-3xl ${
              gift === 3
                ? "border-firstColor text-firstColor bg-bgFirstHover"
                : "text-secondaryColor"
            }`}
          >
            <span>AZN 3</span>
          </button>
          <button
            onClick={() => selectGift(6)}
            className={`border-2 w-1/6 h-8 flex justify-center items-center  font-semibold hover:border-firstColor hover:bg-bgFirstHover transition-all ease-in duration-150 rounded-3xl ${
              gift > 3
                ? "border-firstColor text-firstColor bg-bgFirstHover"
                : "text-secondaryColor"
            }`}
          >
            <span>Digər</span>
          </button>
        </div>
        <label
          htmlFor="gift"
          className={`w-full px-4 box-border flex justify-between items-center rounded-lg cursor-text transition-all ease-linear duration-100 ${
            hightGift
              ? "h-16 mt-8 outline outline-2 outline-gray-300 focus-within:outline-[3px] focus-within:outline-firstColor"
              : "h-0 overflow-hidden outline-none m-0"
          }`}
        >
          <AiOutlineMinus
            onClick={() => (gift > 1 ? dispatch(giftAction(gift - 1)) : "")}
            className={`bg-bgFirstHover text-firstColor rounded-full text-2xl p-0.5 ${
              gift > 1 ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          />
          <div className="w-4/5 flex justify-center ">
            <div>
              <span className="text-secondaryColor mr-2">AZN</span>
              <span className="font-semibold">{gift}</span>
            </div>
            <input
              className="text-center w-0 outline-none"
              onChange={(e) => dispatch(giftAction(+e.target.value))}
              type="number"
              value={gift}
              id="gift"
            />
          </div>
          <AiOutlinePlus
            onClick={() => dispatch(giftAction(gift + 1))}
            className="bg-bgFirstHover cursor-pointer text-firstColor rounded-full text-2xl p-0.5"
          />
        </label>
      </div>
    </div>
  );
}

export default GiftCourier;
