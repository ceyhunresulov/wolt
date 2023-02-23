import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function LoginMobil() {
  return (
    <div className="w-1/4 md:w-1/3 flex-1 flex justify-end items-center lg:hidden">
      <div className="bg-fiftyColor h-8 xs:h-9 flex items-center rounded-3xl p-[2px]">
        <IoPersonCircle className="text-fourthColor bg-white w-7 h-7 rounded-full" />

        <MdOutlineKeyboardArrowDown className="text-2xl ml-2 text-thirdColor" />
      </div>
    </div>
  );
}

export default LoginMobil;
