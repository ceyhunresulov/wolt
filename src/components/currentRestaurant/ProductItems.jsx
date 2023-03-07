import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalAddOrderAction } from "../../redux/actions/modalAction";
import {
  getCurrentProductAction,
  updateCurrentProductAction,
} from "../../redux/actions/productsAction";

function ProductItems({ product, restId }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  const openOrderModal = () => {
    const addedProduct = basket.find((item) => item.id === product.id);
    dispatch(modalAddOrderAction());

    if (addedProduct) dispatch(updateCurrentProductAction(addedProduct));
    else dispatch(getCurrentProductAction({ proId: product.id, restId }));
  };
  return (
    <div
      onClick={openOrderModal}
      className="relative h-36 sm:h-40 lg:w-full lg:h-48 flex justify-center box-border py-5 lg:py-7 cursor-pointer"
    >
      <div className="absolute top-0 h-full w-full hover:w-[103%] lg:hover:w-[110%] border-y rounded-md hover:border transition-all ease-out duration-100"></div>

      <div className="w-full h-full flex justify-between items-center">
        <div className="h-full flex flex-col justify-between">
          <h3 className="text-thirdColor text-sm sm:text-base lg:text-lg font-semibold">
            {product.name}
          </h3>
          <div className="text-sm sm:text-base">
            <span className="text-red font-semibold block mb-2">
              {parseFloat(product.price.find((item) => item.id === restId)?.value).toFixed(2)} AZN
            </span>
            <span className="text-secondaryColor line-through">
              {(parseFloat(product.price.find((item) => item.id === restId)?.value + 2.5)).toFixed(2)}{" "}
              AZN
            </span>
          </div>
        </div>
        <div className="h-full w-40 sm:w-48 lg:w-56 rounded overflow-hidden border ">
          <img
            src={product.img}
            alt=""
            className="h-full w-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
