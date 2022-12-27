import axios from "axios";
import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

function CurrentProductItem({
  products,
  product,
  restId,
  setCategoryLoading,
  categoryLoading,
  category,
}) {
  const removeProduct = async () => {
    let index = product.restId.indexOf(restId);
    product.restId.splice(index, 1);
    product.price = product.price.filter((item) => item.id != restId);

    if (product.restId.length == 0) {
      await axios.delete(`http://localhost:3000/products/${product.id}`);
    } else {
      await axios.put(`http://localhost:3000/products/${product.id}`, product);
    }

    setCategoryLoading(!categoryLoading);
  };
  return (
    <div className="flex items-center h-40 mt-4">
      <div className="border shadow-md h-full w-1/2 p-2 box-border flex justify-between items-center">
        <div className="h-full flex flex-col justify-around w-1/2">
          <h2 className="text-md font-semibold">{product.name}</h2>
          <span className="text-sm text-gray-400 font-medium">
            price: {(product.price.find((item) => item.id === restId)|| {value:''}).value}AZN
          </span>
        </div>
        <div className="w-1/2 h-full">
          <img src={product.img} alt="" />
        </div>
      </div>
      <RiDeleteBin6Fill
        onClick={removeProduct}
        className="text-4xl ml-4 text-red-400 hover:text-red-600 cursor-pointer transition-all ease-linear duration-200"
      />
    </div>
  );
}

export default CurrentProductItem;
