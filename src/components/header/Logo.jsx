import { IoLocation } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


function Logo() {
  return (
    <div className="w-1/3 flex items-center">
          <img
            className="h-full"
            src={`${require("../../images/logo.png")}`}
            alt=""
          />
          <div className="ml-6 flex items-center cursor-pointer">
            <div className="bg-bgFirst hover:bg-bgFirstHover w-10 h-10 rounded-full flex items-center justify-center  transition ease-linear duration-200">
              <IoLocation className="text-2xl text-firstColor" />
            </div>
            <div className="flex flex-col ml-4">
              <span className="text-secondaryColor text-sm">Kimə çatdırılacaq</span>
              <span className="text-firstColor text-sm font-medium">Bakı</span>
            </div>
            <IoIosArrowDown className="ml-4 text-firstColor text-lg"/>
          </div>
        </div>
  )
}

export default Logo