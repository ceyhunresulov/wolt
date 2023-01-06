import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    const currUser = JSON.parse(localStorage.getItem("currentPerson"));
    const fetch = async () => {
      const { data: response } = await axios.get(
        "http://localhost:3000/orders"
      );
      const { data: resRestaurants } = await axios.get(
        "http://localhost:3000/restaurants"
      );
      const filteredOrders = response.filter(
        (item) => item.userId === currUser.id
      );
      setRestaurants(resRestaurants);
      setOrders(filteredOrders);
    };
    fetch();
  }, []);
  return (
    <div className="mt-20 w-3/4 mx-auto">
      {orders.map((order) => (
        <ul className="border p-4 box-border mb-3 shadow-lg" key={order.id}>
          <span className="block text-xl text-blue">
            Status:{" "}
            {!order.courId && !order.delivered
              ? "Baxılır"
              : order.courId && !order.delivered
              ? "Sifariş yoldadır"
              : order.courId && !order.delivered
              ? "Sifariş çatdırıldı"
              : ""}
          </span>
          <span className="text-xl font-semibold">
            Restoran:{" "}
            {restaurants.find((item) => item.id == order.restId).name}
          </span>
          {order.orderList.map((item) => (
            <OrderItem key={item.id} order={item} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Orders;
