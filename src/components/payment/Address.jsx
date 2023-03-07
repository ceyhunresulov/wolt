import { useState } from "react";
import { IoBicycleSharp } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { VscLayoutActivitybarLeft } from "react-icons/vsc";

function Address() {
  const [contactless, setContactless] = useState(false);
  return (
    <div className="mb-16">
      <h2 className="text-2xl lg:text-3xl font-fredoka text-thirdColor mb-8">
        Çatdırılma metodu və vaxtı
      </h2>
      <div className="flex justify-between items-center w-full text-thirdColor mb-2 border py-6 px-5 box-border text-[18px]  rounded cursor-pointer">
        <div className="flex items-center">
          <IoBicycleSharp className="mr-3 text-2xl" />
          <p>Zəhmət olmasa, çatdırılma ünvanı əlavə edin</p>
        </div>
        <SlArrowRight />
      </div>

      <div className="flex justify-between items-center w-full text-thirdColor border py-6 px-5 box-border text-[18px]  rounded cursor-pointer">
        <div className="">
          <h2>Təmassız çatdırılma</h2>
          <p className="text-sm text-secondaryColor">
            Xahiş edirəm, sifarişimi qapıda/girişdə qoyasınız
          </p>
        </div>
        <div
          onClick={() => setContactless(!contactless)}
          className={`w-[52px] h-[32px] rounded-lg p-1 box-border hover:cursor-auto shadow-inner ${
            contactless ? "bg-[#1fc70a]" : "bg-bgSecondary"
          }`}
        >
          <div className="w-full h-full relative">
            <div
              className={`w-6 h-6 rounded absolute top-0 transition-all ease-linear duration-100 bg-white ${
                contactless ? "left-[20px]" : "left-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
