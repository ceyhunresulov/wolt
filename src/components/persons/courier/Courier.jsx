import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function Courier() {
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [confirm, setConfirm] = useState(false);
  console.log(confirm);
  const confirmOrder = async () => {
    order.confirmCourier = true;
    const confirmedOrder = await axios.put(
      `http://localhost:3000/orders/${order.id}`,
      order
    );
    setOrder(confirmedOrder.data);
    setConfirm(true);
  };

  const refuseOrder = async () => {
    order.confirmCourier = null;
    const confirmedOrder = await axios.put(
      `http://localhost:3000/orders/${order.id}`,
      order
    );
    setOrder([]);
  };

  useEffect(() => {
    const fetch = async () => {
      const courier = await JSON.parse(localStorage.getItem("currentPerson"));

      const { data: orders } = await axios.get("http://localhost:3000/orders");
      const { data: restaurants } = await axios.get(
        "http://localhost:3000/restaurants"
      );
      const { data: persons } = await axios.get(
        "http://localhost:3000/persons"
      );
      const currentOrder =
        orders.find(
          (order) => order.courId == courier.id && order.confirmCourier !== null
        ) || [];
      const currRestaurant = restaurants.find(
        (restaurant) => restaurant.id == currentOrder.restId
      );
      const currCustomer = persons.find(
        (person) => person.id == currentOrder.userId
      );
      setOrder(currentOrder);
      setProducts(currentOrder.orderList);
      setRestaurant(currRestaurant);
      setCustomer(currCustomer);
      setConfirm(currentOrder.confirmCourier)
    };
    fetch();
  }, []);
  return (
    <>
      {(order.id && (
        <>
          <div className="mt-20 w-desktop flex justify-between mx-auto">
            <div className="w-1/2 border-r-2">
              <h1 className="text-center text-2xl font-semibold mb-3">
                Restoran
              </h1>
              <div className="w-full h-80 flex justify-between">
                <div className="w-2/3 h-full">
                  <img className="w-full h-full" src={restaurant.img} alt="" />
                </div>
                <div className="flex flex-col w-1/3 p-3 box-border">
                  <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                  <p className="text-gray-400 mb-4">{restaurant.description}</p>
                  <span>İş vaxtı: {restaurant.worktime}</span>
                  <span>Ünvan: {restaurant.address}</span>
                  <span>Əlaqə: {restaurant.contact}</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-4 box-border">
              <h1 className="text-center text-2xl font-semibold mb-3">
                Müştəri
              </h1>
              <p className="text-xl">Ad: {customer.name}</p>
              <p className="text-xl">
                Email:{" "}
                <a
                  className="text-blue underline"
                  href={`mailto:${customer.email}`}
                >
                  {customer.email}
                </a>
              </p>
              <p className="text-xl">Address: {order.address}</p>
              <p className="text-xl">Əlaqə: {order.phone}</p>
            </div>
          </div>
          <div className="mt-16 mb-4 flex justify-end w-desktop mx-auto">
            <button
              onClick={confirmOrder}
              className={`${
                confirm ? "bg-green-500" : " bg-blue"
              } text-xl py-2 px-3 text-white mx-1 box-border rounded`}
            >
              {confirm ? "Təstiqlənib" : "Təstiqlə"}
            </button>
            <button
              onClick={refuseOrder}
              className="text-xl py-2 px-3 text-white bg-red-900 mx-1 box-border rounded"
            >
              İmtina et
            </button>
            <button
              disabled={!order.confirmCourier}
              className={`${
                order.confirmCourier
                  ? "bg-zinc-700"
                  : "bg-zinc-500 cursor-not-allowed"
              } text-xl py-2 px-3 text-white ml-1 box-border rounded`}
            >
              Çatdırıldı
            </button>
          </div>
          <div className="w-desktop mx-auto border-t-4 pt-2 box-border">
            <h1 className="text-center text-2xl font-semibold mb-3 justify-self-start">
              Sifarişlər
            </h1>
            <ul>
              {products.map((product) => (
                <OrderItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </>
      )) || (
        <h1 className="text-4xl text-center font-semibold text-red-900 mt-32">
          Sifariş yoxdur
        </h1>
      )}
    </>
  );
}

export default Courier;
