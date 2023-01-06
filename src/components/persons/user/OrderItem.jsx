import React from "react";

function OrderItem({ order }) {
  return (
    <li className="h-60 border my-4 flex items-center">
      <div className="h-full w-1/3">
        <img src={order.img} alt="" className="w-full h-full" />
      </div>
      <div className="ml-4 flex flex-col h-full">
        <h1 className="text-xl font-semibold">{order.name}</h1>
        <span className="text-lg text-blue">Count: {order.count}</span>
        <span className="text-lg text-blue">
          Price: {order.count * order.price}.00 AZN
        </span>
      </div>
    </li>
  );
}

export default OrderItem;
