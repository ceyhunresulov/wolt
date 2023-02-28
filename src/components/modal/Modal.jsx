import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Orders from "./Orders";
import AddedOrder from "./AddedOrder";
import Address from "./Address";
import { modalCloseAction } from "../../redux/actions/modalAction";
function Modal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalCloseAction());
  };

  useEffect(() => {
    if (modal.open) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "";
  }, [modal]);
  return (
    <div
      className={`fixed top-0 left-0 transition-all ease-linear duration-200 w-full h-full bg-secondaryColor overflow-hidden z-50 flex justify-center items-end sm:items-center ${
        modal.open ? "" : "invisible opacity-0 pt-36 box-border"
      }`}
    >
      <div
        className={`bg-white w-full rounded-2xl overflow-hidden flex flex-col items-center relative ${
          modal.address
            ? "sm:w-[550px] h-[95vh]"
            : modal.order
            ? "sm:w-[520px] h-[80vh]"
            : "sm:w-[500px] h-[90vh]"
        }`}
      >
        <div className="h-full w-full px-5 box-border">
          <header className="w-full h-18  flex items-center justify-end">
            <div
              className={`absolute left-0 top-0 w-full flex items-center border-2 justify-center overflow-hidden shadow-md ${
                false ? "h-18" : "h-0"
              }`}
            >
              <h3 className="font-semibold">Hesab yaradın və ya daxil olun</h3>
            </div>
            <button
              onClick={closeModal}
              className="bg-bgSecondary rounded-full p-2.5 box-border text-xl cursor-pointer hover:bg-secondaryDark transition-all ease-in duration-150 z-10"
            >
              <GrClose className="text-thirdColor" />
            </button>
          </header>

          {(modal.login && <Login />) ||
            (modal.orders && <Orders />) ||
            (modal.order && <AddedOrder />) ||
            (modal.address && <Address />)}
        </div>
      </div>
    </div>
  );
}

export default Modal;
