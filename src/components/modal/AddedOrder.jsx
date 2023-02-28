import { useSelector } from "react-redux";
import { AiOutlineMinus } from "react-icons/ai";

function AddedOrder() {
  const product = useSelector((state) => state.product);
  console.log(product, "salam");

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-3/5">
        <img src={product.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-2/5 p-4 box-border flex flex-col justify-between">
        <div>
          <h2 className="text-3xl text-thirdColor font-bold mb-2">
            {product.name}
          </h2>
          <span className="text-base text-firstColor font-semibold">
            {product.price} AZN
          </span>
        </div>
        <div className="border flex justify-between items-center h-14">
          <div className="h-full flex items-center bg-bgFirstHover w-[33%] rounded-md">
            <AiOutlineMinus className="text-firstColor" />1<button>+</button>
          </div>
          <button className="w-[64%] bg-firstColor h-full rounded-lg text-white">sifaris ver</button>
        </div>
      </div>
    </div>
  );
}

export default AddedOrder;
