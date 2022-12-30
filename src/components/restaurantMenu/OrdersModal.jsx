import { useState } from "react";
import OrdersItem from "./OrdersItem";

function OrdersModal({ countBtn, setCountBtn, orders, setOrders }) {
  const [isScroll, setIsScroll] = useState(false);
  const onScrollOrders = (e) => {
    if (e.target.scrollTop > 20) setIsScroll(true);
    else setIsScroll(false);
  };

  return (
    <>
      <div
        className={`${
          isScroll ? "h-20 bg-white shadow-xl" : "invisible h-10"
        } w-full flex justify-center items-center transition-all ease-linear duration-300 absolute top-0 left-0 z-20`}
      >
        <span className="text-md font-semibold">Sifarişləriniz</span>
      </div>
      <div
        onScroll={onScrollOrders}
        className="h-full w-full pt-32 pb-6 px-6 box-border overflow-auto scroll"
      >
        <h1 className="text-3xl font-bold mb-4">Sifarişləriniz</h1>
        <ul>
          {orders.map((order) => (
            <OrdersItem
              key={order.id}
              countBtn={countBtn}
              setCountBtn={setCountBtn}
              order={order}
              setOrders={setOrders}
            />
          ))}
        </ul>
      </div>
      <div className="h-1/4 w-full absolute bottom-0 left-0 bg-gradient-to-t from-white flex items-end">
        <div className="px-6 w-full h-1/2 flex items-start bg-white">
          <button className="w-full bg-blue h-14 rounded-md flex justify-between items-center px-4 box-border">
            <div className="flex">
              <span className="bg-white text-blue rounded-full text-md font-semibold px-1.5 py-0.5">
                {orders.reduce((init, curr) => init + curr.count, 0)}
              </span>
              <span className="text-xl text-white font-semibold ml-4">Ödənişi təstiqləyin</span>
            </div>
            <span className="text-white text-xl">{orders.reduce((init, curr) => init + curr.price, 0)}.00 AZN</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default OrdersModal;
