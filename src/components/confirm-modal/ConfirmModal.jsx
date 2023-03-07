import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetBasketAction } from "../../redux/actions/basketAction";
import { closeConfirmModalAction } from "../../redux/actions/confirmModalAction";

function ConfirmModal() {
  const confirmModal = useSelector((state) => state.confirm);
  const dispatch = useDispatch();

  const clickYes = () => {
    dispatch(closeConfirmModalAction());
  };
  const clickNot = () => {
    dispatch(closeConfirmModalAction());
    dispatch(resetBasketAction())
  };

  useEffect(() => {
    if (confirmModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "";
    }
  }, [confirmModal]);
  return (
    <div
      className={`fixed top-0 left-0 transition-all ease-linear duration-200 w-full h-full bg-secondaryColor overflow-hidden z-50 flex justify-center items-end sm:items-center ${
        confirmModal ? "" : "invisible opacity-0 box-border"
      }`}
    >
      <div
        className={`w-[400px] h-[220px] bg-white rounded-2xl p-4 box-border text-base text-thirdColor transition-all ease-linear duration-300 ${
          confirmModal ? "scale-100" : "-rotate-45 scale-75"
        } `}
      >
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-center font-semibold">
            Tamamlanmamış sifarişi bərpa et
          </h2>
          <p className="text-center">
            Daha əvvəldən qalan, tamamlanmamış sifarişiniz var, qaldığınız
            yerdən davam etmək istərdiniz?
          </p>
          <div className="h-14 flex justify-between">
            <button
              onClick={clickNot}
              className={`h-full w-[49%] transition-all ease-linear duration-150 font-semibold rounded-lg bg-bgFirst hover:bg-bgFirstHover text-firstColor`}
            >
              Xeyr
            </button>
            <button
              onClick={clickYes}
              className={`h-full w-[49%] transition-all ease-linear duration-150 font-semibold rounded-lg bg-firstColor hover:bg-firstColorLight text-white`}
            >
              Bəli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
