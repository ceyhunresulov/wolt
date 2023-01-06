import React, { useState } from "react";

function Product({
  product,
  restaurant,
  setCLickedProduct,
  setOrderModal,
  setProductModal,
}) {
  const [price, setPrice] = useState(
    product.price.find((item) => item.id == restaurant.id).value
  );
  const onHandleClick = () => {
    setCLickedProduct({ ...product, price: price });
    setProductModal(true);
    setOrderModal(true);
  };
  return (
    <div
      onClick={onHandleClick}
      className="cursor-pointer flex px-6 box-border border border-transparent hover:border-gray-300 rounded transition-all ease-in-out duration-700 h-60"
    >
      <div className="h-full flex justify-between border-y hover:border-transparent w-full p-6 box-border transition-all ease-in-out duration-700">
        <div className="h-full">
          <h1 className="text-2xl mb-3">{product.name}</h1>
          <span className="text-blue">{price} AZN</span>
        </div>
        <div className="h-full w-2/5">
          <img src={product.img} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default Product;
