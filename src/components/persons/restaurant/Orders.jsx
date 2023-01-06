import axios from "axios";
import React, { useEffect, useState } from "react";
import Order from "./Order";

function Orders({ restId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data: response } = await axios.get(
        "http://localhost:3000/orders"
      );

      const filteredOrders = response.filter((item) => item.restId === restId);
      setOrders(filteredOrders);
    };
    fetch();
  }, []);
  return (
    <>
      {(orders.length > 0 &&
        orders.map((order) => (
          <Order
            key={order.id}
            order={order}
            orders={orders}
            setOrders={setOrders}
          />
        ))) || <h1 className="mt-8 text-2xl font-semibold">Sifariş yoxdur</h1>}
    </>
  );
}

export default Orders;
