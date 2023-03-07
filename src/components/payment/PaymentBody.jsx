import React from "react";
import Address from "./Address";
import Confirm from "./Confirm";
import GiftCourier from "./GiftCourier";
import PaymentInfo from "./PaymentInfo";
import PromoCode from "./PromoCode";
import SelectedProducts from "./SelectedProducts";

function PaymentBody() {
  return (
    <div className="w-mobil md:w-desktop xl:w-tablet mx-auto  lg:flex justify-between py-16 box-border">
      <div className="w-full lg:w-[570px] ">
        <Address />
        <SelectedProducts />
        <PaymentInfo />
        <GiftCourier />
        <PromoCode />
      </div>
      <div className="w-full lg:w-[450px] border-blue relative">
        <Confirm />
      </div>
    </div>
  );
}

export default PaymentBody;
