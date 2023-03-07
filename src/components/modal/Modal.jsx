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
  const [scrolling, setScrolling] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(modalCloseAction());
  };

  const onScroll = (e) => {
    if (e.target.scrollTop > 10) setScrolling(true);
    else setScrolling(false);
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
      <div onClick={closeModal} className="absolute top-0 left-0 h-full w-full"></div>
      <div
        className={`bg-white w-full rounded-2xl overflow-hidden flex flex-col items-center relative z-20 ${
          modal.address
            ? "sm:w-[550px] h-[95vh]"
            : modal.order
            ? "sm:w-[520px] h-[80vh]"
            : "sm:w-[500px] h-[90vh]"
        }`}
      >
        <div
          onScroll={onScroll}
          className="h-full w-full px-5 pt-16 box-border overflow-y-scroll"
        >
          <header className="w-full h-18 absolute top-0 left-0 px-5 z-30 flex items-center justify-end">
            <div
              className={`absolute left-0 top-0 w-full bg-white transition-all ease-linear duration-150 flex items-center justify-center overflow-hidden shadow-md ${
                scrolling ? "h-18 border-2" : "h-0"
              }`}
            >
              <h3 className="font-semibold">Sizin sifarişiniz</h3>
            </div>
            <button
              onClick={closeModal}
              className={`bg-gray-200 rounded-full p-2.5 box-border text-xl cursor-pointer hover:bg-gray-100 transition-all ease-in duration-150 z-10`}
            >
              <GrClose className={`text-thirdColor`} />
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
