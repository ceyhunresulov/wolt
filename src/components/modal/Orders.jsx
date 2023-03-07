import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { modalCloseAction } from "../../redux/actions/modalAction";
import { useNavigate, useParams } from "react-router-dom";
import { modalLoginAction } from "../../redux/actions/modalAction";

function Orders() {
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const {id}=useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendOrders = () => {
    dispatch(modalCloseAction());

    if (user) navigate("/payment");
    else {
      dispatch(modalLoginAction());
    }
  };

  return (
    <div className="pt-8 box-border h-full">
      <h2 className="text-thirdColor text-3xl font-bold mb-4">
        Sizin Sifarişiniz
      </h2>
      <ul>
        {basket.map((item) => (
          <OrderItem key={item.id} order={item} />
        ))}
      </ul>
      {basket.length > 0 &&
        ((
          <div className="w-full absolute z-50 bottom-0 left-0 flex items-end px-5 bg-white">
            <div className="w-full pb-5 flex items-start shadow-3xl">
              <button
                onClick={sendOrders}
                className="w-full shadow-3xl bg-firstColor h-14 rounded-md flex justify-between items-center px-4 box-border text-base font-semibold"
              >
                <div className="flex items-center">
                  <div className="bg-white text-firstColor rounded-full w-6 h-6 flex justify-center items-center">
                    <span className="block">
                      {basket.reduce((init, curr) => init + curr.count, 0)}
                    </span>
                  </div>
                  <span className="text-white ml-4">
                    Ödəmə bölməsiniə keçin
                  </span>
                </div>
                <span className="text-white">
                  {basket.reduce(
                    (init, curr) => init + curr.price * curr.count,
                    0
                  )}
                  .00 AZN
                </span>
              </button>
            </div>
          </div>
        ) ||
          null)}
    </div>
  );
}

export default Orders;
