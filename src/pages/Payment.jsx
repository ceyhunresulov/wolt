import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paymentHeaderStyleAction } from "../redux/actions/headerStyleAction";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import PaymentBody from "../components/payment/PaymentBody";
import { openConfirmModalAction } from "../redux/actions/confirmModalAction";

function Payment() {
  const dispatch = useDispatch();
  const [restaurant] = useSelector((state) => state.restaurants);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(paymentHeaderStyleAction());
  }, []);
  return (
    <>
      <div className="h-[60vh] w-full bg-zinc-200 cursor-grab flex justify-center group ">
        <div className="h-full w-mobil md:w-desktop xl:w-tablet text-thirdColor flex flex-col justify-between pt-8 pb-24 box-border">
          <div>
            <button
              onClick={goBack}
              className="flex items-center hover:text-secondaryColor"
            >
              <TbArrowNarrowLeft className="mr-1" />
              <span>Geri</span>
            </button>
          </div>
          <div className="font-fredoka text-thirdColor group-hover:text-secondaryColor transition-all ease-in duration-200">
            <h1 className="text-5xl lg:text-6xl mb-2">Ödəmə</h1>
            <h2 className="text-3xl">{restaurant.name}</h2>
          </div>
        </div>
      </div>
      <PaymentBody />
    </>
  );
}

export default Payment;
