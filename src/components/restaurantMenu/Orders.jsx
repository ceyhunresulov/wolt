import { useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import OrdersModal from "./OrdersModal";
import ProductModal from "./ProductModal";

function Orders({
  product,
  orderModal,
  setOrderModal,
  orders,
  setOrders,
  productModal,
}) {
  const modalEl = useRef();
  const closeModal = () => {
    setOrderModal(false);
  };
  const onHandleClickModal = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={closeModal}
      className={`${
        orderModal
          ? "h-full visible opacity-100"
          : "h-full invisible opacity-0 mt-[100px]"
      } w-full bg-[#20212554] fixed z-50 bottom-0 flex justify-center items-center transition-all ease-in duration-200`}
    >
      <div
        ref={modalEl}
        onClick={onHandleClickModal}
        className="bg-white h-5/6 w-1/3 rounded-2xl overflow-hidden relative"
      >
        <GrFormClose
          onClick={closeModal}
          className="absolute right-4 top-4 z-40 text-5xl cursor-pointer p-1 box-border bg-gray-100 rounded-full"
        />
        {(productModal && (
          <ProductModal
            product={product}
            orders={orders}
            setOrders={setOrders}
            orderModal={orderModal}
            setOrderModal={setOrderModal}
          />
        )) || (
          <OrdersModal
            orders={orders}
            setOrders={setOrders}
            modalEl={modalEl.current}
            setOrderModal={setOrderModal}
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
