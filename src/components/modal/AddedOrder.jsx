import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { changeCurrentProuductAction } from "../../redux/actions/productsAction";
import { addProductBasketAction } from "../../redux/actions/basketAction";
import { modalCloseAction } from "../../redux/actions/modalAction";

function AddedOrder() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const minusClick = () => {
    if (product.count > 1)
      dispatch(changeCurrentProuductAction(product.count - 1));
  };

  const plusClick = () => {
    dispatch(changeCurrentProuductAction(product.count + 1));
  };

  const sendPrdouctToBasket = () => {
    dispatch(addProductBasketAction(product));
    dispatch(modalCloseAction())
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-[62%]">
        <img src={product.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[38%] p-4 box-border flex flex-col justify-between">
        <div>
          <h2 className="text-3xl text-thirdColor font-bold mb-2">
            {product.name}
          </h2>
          <span className="text-base text-firstColor font-semibold">
            {product.price} AZN
          </span>
        </div>
        <div className="flex justify-between items-center h-14">
          <div className="h-full flex items-center justify-between bg-bgFirstHover w-[33%] rounded-md px-4 box-border">
            <AiOutlineMinus
              onClick={minusClick}
              className={`text-firstColor rounded-full text-2xl ${
                product.count > 1
                  ? "bg-white cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            />
            <span className="text-firstColor">{product.count}</span>
            <AiOutlinePlus
              onClick={plusClick}
              className="text-firstColor bg-white rounded-full text-2xl cursor-pointer"
            />
          </div>
          <button
            onClick={sendPrdouctToBasket}
            className="w-[65%] bg-firstColor h-full rounded-lg text-white font-bold flex justify-between px-4 box-border items-center"
          >
            {(!product.basket && <span>Sifariş əlavə et</span>) || (
              <span>Sifarişi yenilə</span>
            )}
            <span>{product.price * product.count} AZN</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddedOrder;
