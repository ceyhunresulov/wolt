import { MdPayment } from "react-icons/md";
import {SlArrowRight} from 'react-icons/sl'

function PaymentInfo() {
  return (
    <div className="mb-16">
        <div className="flex justify-between items-center w-full text-thirdColor border py-6 px-5 box-border text-[18px] rounded cursor-pointer">
          <div className="flex items-center">
            <MdPayment className="text-firstColor text-2xl lg:text-3xl mr-3" />
            <div className="">
              <h2 className="text-firstColor">Ödəniş metodu seçin</h2>
              <p className="text-sm text-secondaryColor">
                Sifarişə davam etmək üçün ödəniş metodu əlavə etməlisiniz.
              </p>
            </div>
          </div>
          <SlArrowRight />
        </div>
    </div>
  );
}

export default PaymentInfo;
