import axios from "axios";
import { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function Order({ order, setOrders }) {
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);
  const [couriers, setCouriers] = useState([]);
  const [currCourier, setCurrCourier] = useState(null);

  const showCurrCourier = (e) => {
    setCurrCourier(e.target.value);
  };

  const confirmOrders = async () => {
    if (currCourier) {
      order.courId = currCourier;
      await axios.put(`http://localhost:3000/orders/${order.id}`, order);
      const { data: updatedOrders } = await axios.get(
        "http://localhost:3000/orders"
      );
      setOrders(updatedOrders);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 4000);
    } else {
      setError("Kuryer seçin");
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const { data: resCouriers } = await axios.get(
        "http://localhost:3000/persons"
      );
      const filteredPersons = resCouriers.filter(
        (item) => item.role === "courier"
      );
      setCouriers(filteredPersons);
    };
    fetch();
  }, []);
  return (
    <ul
      className="border p-4 box-border mb-3 shadow-lg w-full bg-slate-300"
      key={order.id}
    >
      <div className="flex justify-between items-center w-full">
        <span className="block text-xl text-blue">
          Status:{" "}
          {!order.courId && !order.delivered
            ? "Baxılır"
            : order.courId && order.confirmCourier === null
            ? "kuryer gözlənilir"
            : order.confirmCourier === false
            ? `${
                couriers.find((item) => item.id == order.courId).name
              } sifarişi qəbul etmədi!`
            : order.courId && order.confirmCourier && !order.delivered
            ? "Sifariş yoldadır"
            : order.courId && order.confirmCourier && order.delivered
            ? "Sifariş çatdırıldı"
            : ""}
        </span>
        <span className="text-xl font-semibold">
          {(order.courId &&
            order.confirmCourier !== false &&
            `Kuryer: ${
              order.courId &&
              couriers.length > 0 &&
              couriers.find((item) => item.id == order.courId).name
            }`) ||
            "Kuryer seçin"}
        </span>
        <form action="" className="flex items-center">
          <select
            onChange={showCurrCourier}
            defaultValue=""
            name=""
            id=""
            className="w-48 text-lg p-1"
          >
            <option value="" disabled>
              Couriers
            </option>
            {couriers.map((courier) => (
              <option key={courier.id} className="text-lg" value={courier.id}>
                {courier.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      {order.orderList.map((item) => (
        <OrderItem key={item.id} order={item} />
      ))}
      <button
        disabled={order.courId && order.confirmCourier}
        onClick={confirmOrders}
        className={`rounded-md text-white text-xl py-2 px-4 ${
          order.courId && order.confirmCourier ? "bg-gray-400" : "bg-cyan-500"
        }`}
      >
        {(order.courId && order.confirmCourier && " Sifarişlər təstiqlənib") ||
          " Sifarişləri təstiqlə"}
      </button>
      <span
        className={`ml-4 text-lg text-red-700 py-2 px-4 border-red-700 ${
          error ? "border" : ""
        }`}
      >
        {error}
      </span>
      <span
        className={`${
          alert
            ? "ml-4 text-lg text-green-700 py-2 px-4 border border-green-700"
            : "hidden"
        }`}
      >
        Kuryer seçildi
      </span>
    </ul>
  );
}

export default Order;
