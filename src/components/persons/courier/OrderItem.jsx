import React from "react";

function OrderItem({ product }) {
  return (
    <li className="h-60 border my-4 flex items-center">
      <div className="h-full w-1/3">
        <img src={product.img} alt="" className="w-full h-full" />
      </div>
      <div className="ml-4 flex flex-col h-full">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <span className="text-lg text-blue">Count: {product.count}</span>
        <span className="text-lg text-blue">
          Price: {product.count * product.price}.00 AZN
        </span>
      </div>
    </li>
  );
}

export default OrderItem;
