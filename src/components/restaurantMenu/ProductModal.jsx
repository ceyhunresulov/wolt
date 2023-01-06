import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useEffect, useState } from "react";

function ProductModal({
  product,
  orderModal,
  setOrderModal,
  orders,
  setOrders,
}) {
  const [productCount, setProductCount] = useState(1);
  const productMinus = () => {
    setProductCount(productCount - 1);
  };
  const productPlus = () => {
    setProductCount(productCount + 1);
  };
  const sendOrder = () => {
    if (orders.find((item) => item.id === product.id)) {
      setOrders([
        ...orders.filter((item) => item.id !== product.id),
        {
          id: product.id,
          count: productCount,
          price: product.price,
          name: product.name,
          img: product.img,
        },
      ]);
    } else {
      setOrders([
        ...orders,
        {
          id: product.id,
          count: productCount,
          price: product.price,
          name: product.name,
          img: product.img,
        },
      ]);
    }
    setOrderModal(false);
  };
  useEffect(() => {
    const checkOrder = orders.find((item) => item.id === product.id);
    if (checkOrder) {
      setProductCount(checkOrder.count);
    } else {
      setProductCount(1);
    }
  }, [orderModal]);
  return (
    <>
      <div className="w-full h-3/5">
        <img src={product.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="w-full pt-4 px-3 pb-3 box-border h-2/5 flex flex-col justify-between">
        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <span className="text-md font-semibold text-blue">
            {product.price}.00 AZN
          </span>
        </div>
        <div className="w-full h-14 flex justify-between">
          <div className="bg-lightBlue w-1/3 h-full p-4 flex justify-between items-center shadow rounded-lg">
            <button onClick={productMinus} disabled={productCount == 1}>
              <AiOutlineMinus
                className={`${
                  productCount > 1 ? "bg-white" : ""
                } rounded-full text-2xl text-blue cursor-pointer`}
              />
            </button>
            <span className="text-md text-blue">{productCount}</span>
            <button>
              <AiOutlinePlus
                onClick={productPlus}
                className="bg-white rounded-full text-2xl text-blue cursor-pointer"
              />
            </button>
          </div>
          <button
            onClick={sendOrder}
            className="w-3/5 h-full rounded-lg bg-blue flex justify-between items-center text-white font-semibold px-4 box-border"
          >
            {(orders.find((item) => item.id === product.id) && (
              <span>Sifarişi yenilə</span>
            )) || <span>Sifariş əlavə et</span>}
            <span>{productCount * product.price} AZN</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
