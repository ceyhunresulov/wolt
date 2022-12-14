import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

function OrdersItem({ order, setOrders, orders, modalEl }) {
  const [countBtn, setCountBtn] = useState(true);
  const [productCount, setProductCount] = useState(order.count);
  const productMinus = () => {
    if (order.count === 1) {
      setOrders(orders.filter((item) => item.id != order.id));
    } else {
      order.count -= 1;
      setOrders([...orders]);
    }
  };
  const productPlus = () => {
    order.count += 1;
    setOrders([...orders]);
  };
  const changeOrder = (e) => {
    e.stopPropagation();
    setCountBtn(false);
  };
  const removeOrder = () => {
    setOrders(orders.filter((item) => item.id != order.id));
  };
  useEffect(() => {
    document.addEventListener("click", () => {
      setCountBtn(true);
    });
    modalEl.addEventListener("click", () => {
      setCountBtn(true);
    });
  }, []);
  return (
    <li className="w-full h-14 mb-8 flex justify-start items-center relative">
      <div
        onClick={(e) => setCountBtn(false)}
        className={`h-10 overflow-hidden relative transition-all ease-linear duration-100 ${
          countBtn ? "w-10" : "w-1/3"
        }`}
      >
        <button
          onClick={changeOrder}
          className={`absolute left-0 top-0 h-full w-10 bg-white border-2 rounded hover:border-blue text-blue transition-all ease-linear duration-200 ${
            !countBtn ? "hidden" : ""
          }`}
        >
          {order.count}
        </button>
        <div className="bg-lightBlue w-full h-full p-4 flex justify-between items-center shadow rounded-lg">
          <button onClick={productMinus}>
            <AiOutlineMinus
              className={`bg-white rounded-full text-xl text-blue cursor-pointer`}
            />
          </button>
          <span className="text-md text-blue">{order.count}</span>
          <button>
            <AiOutlinePlus
              onClick={productPlus}
              className="bg-white rounded-full text-xl text-blue cursor-pointer"
            />
          </button>
          <RiDeleteBin6Fill
            onClick={removeOrder}
            className="text-xl text-blue cursor-pointer"
          />
        </div>
      </div>
      <div className="ml-4">
        <h2
          className={`${
            !countBtn ? "text-blue" : ""
          } transition-all ease-linear duration-200`}
        >
          {order.name}
        </h2>
        <span className="text-md text-blue">{order.price}.00 AZN</span>
      </div>
      <div className="w-1/4 h-full absolute top-0 right-0  flex justify-end bg-opacity-60 bg-white">
        <img src={order.img} alt="" className="h-full w-10/12 rounded" />
      </div>
    </li>
  );
}

export default OrdersItem;
