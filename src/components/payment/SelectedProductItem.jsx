import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  closeOrderBasketAction,
  updateBasketAction,
} from "../../redux/actions/basketAction";
import { modalCloseAction } from "../../redux/actions/modalAction";

function SelectedProductItem({ order }) {
  const navigate=useNavigate()
  const basket = useSelector((state) => state.basket);
  const [countBox, setCountBox] = useState(false);
  const dispatch = useDispatch();
  const orderEl = useRef();

  const minusOrder = () => {
    if (order.count > 1) {
      dispatch(updateBasketAction({ id: order.id, count: order.count - 1 }));
    } else {
      dispatch(closeOrderBasketAction(order.id));
      if (basket.length ===1) navigate(-1);
    }
  };
  const plusOrder = () => {
    dispatch(updateBasketAction({ id: order.id, count: order.count + 1 }));
  };

  const closeOrder = () => {
    dispatch(closeOrderBasketAction(order.id));
    if (basket.length === 1) navigate(-1);
  };

  useEffect(() => {
    const parentBox = orderEl.current.parentElement.parentElement;
    const closeCountBox = () => {
      setCountBox(false);
    };
    parentBox.addEventListener("click", closeCountBox);

    return () => parentBox.removeEventListener("click", closeCountBox);
  });
  return (
    <li
      ref={orderEl}
      onClick={() => setCountBox(true)}
      className="w-full h-14 mb-4 cursor-pointer flex justify-start items-center relative"
    >
      <div
        className={`h-10 overflow-hidden bg-bgFirstHover rounded relative transition-all ease-linear duration-100 ${
          countBox ? "w-1/3" : "w-10"
        }`}
      >
        <button
          className={`absolute left-0 top-0 h-full w-10 bg-white border-2 rounded hover:border-firstColor text-firstColor transition-all ease-linear duration-200 ${
            countBox ? "hidden" : ""
          }`}
        >
          {order.count}
        </button>
        <div className="bg-lightBlue w-full h-full p-4 flex justify-between items-center shadow rounded">
          <button onClick={minusOrder}>
            <AiOutlineMinus
              className={`bg-white rounded-full text-xl text-firstColor cursor-pointer`}
            />
          </button>
          <span className="text-md text-firstColor">{order.count}</span>
          <button onClick={plusOrder}>
            <AiOutlinePlus className="bg-white rounded-full text-xl text-firstColor cursor-pointer" />
          </button>
          <RiDeleteBin6Fill
            onClick={closeOrder}
            className="text-xl text-firstColor cursor-pointer"
          />
        </div>
      </div>
      <div className="ml-4">
        <h2
          className={`${
            true ? "text-firstColor" : ""
          } transition-all ease-linear duration-200`}
        >
          {order.name}
        </h2>
        <span className="text-md text-firstColor">{order.price} AZN</span>
      </div>
      <div className="w-32 h-full absolute top-0 right-0  flex justify-end bg-opacity-60 bg-white">
        <img src={order.img} alt="" className="h-full w-10/12 rounded" />
      </div>
    </li>
  );
}

export default SelectedProductItem;
