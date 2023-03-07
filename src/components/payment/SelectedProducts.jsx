
import { useSelector } from "react-redux";
import {AiOutlinePlus} from 'react-icons/ai'
import SelectedProductItem from "./SelectedProductItem";
import { useNavigate } from "react-router-dom";

function SelectedProducts() {
  const basket = useSelector((state) => state.basket);
  const navigate=useNavigate()
  return (
    <div className="mb-16">
        <h2 className="text-2xl lg:text-3xl text-thirdColor font-fredoka mb-8 ">Seçilmiş məhsullar</h2>
      {basket.map((item) => (
        <SelectedProductItem key={item.id} order={item} />
      ))}
      <button onClick={()=> navigate(-1) } className="flex items-center text-thirdColor mt-8">
        <AiOutlinePlus className="text-2xl mr-4"/>
        <span className="text-base font-semibold">Seçim əlavə etmək</span>
      </button>
    </div>
  );
}

export default SelectedProducts;
