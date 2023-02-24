
import { useRef, useState } from "react";
import OrdersItem from "./OrdersItem";

function OrdersModal({ orders, setOrders, modalEl, setOrderModal }) {
  const address = useRef();
  const phone = useRef();
  const [err, setErr] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [successOrder, setSuccessOrder] = useState(false);
  // const onScrollOrders = (e) => {
  //   if (e.target.scrollTop > 20) setIsScroll(true);
  //   else setIsScroll(false);
  // };
  // const confirmOrders = async () => {
  //   const checkUser = JSON.parse(localStorage.getItem("currentPerson"));
  //   const currentRest = JSON.parse(localStorage.getItem("currentRestaurant"));
  //   if (
  //     checkUser &&
  //     checkUser.role == "user" &&
  //     address.current.value.length > 3 &&
  //     `${phone.current.value}`.length === 10
  //   ) {
  //     const { data: response } = await axios.get(
  //       "http://localhost:3000/orders"
  //     );
  //     const currOrders = {
  //       id: response.length + 1,
  //       userId: checkUser.id,
  //       restId: currentRest.id,
  //       courId: null,
  //       confirmCourier: null,
  //       delivered: false,
  //       address: address.current.value,
  //       phone: phone.current.value,
  //       orderList: orders,
  //     };
  //     await axios.post("http://localhost:3000/orders", currOrders);
  //     address.current.value = null;
  //     phone.current.value = null;
  //     setOrders([]);
  //     setSuccessOrder(true);
  //     setTimeout(() => {
  //       setSuccessOrder(false);
  //       setOrderModal(false);
  //     }, 4000);
  //   } else if (!(checkUser && checkUser.role == "user")) {
  //     setErr("Login to order!!!");
  //     setTimeout(() => {
  //       setErr(false);
  //     }, 4000);
  //   } else if (address.current.value.length < 3) {
  //     setErr("address must be at least 3 letters long !!!");
  //     setTimeout(() => {
  //       setErr(false);
  //     }, 4000);
  //   } else {
  //     setErr("Number wrong !!!");
  //     setTimeout(() => {
  //       setErr(false);
  //     }, 4000);
  //   }
  // };

  return 
    // <>
    //   <div
    //     className={`${
    //       isScroll ? "h-20 bg-white shadow-xl" : "invisible h-10"
    //     } w-full flex justify-center items-center transition-all ease-linear duration-300 absolute top-0 left-0 z-20`}
    //   >
    //     <span className="text-md font-semibold">Sifarişləriniz</span>
    //   </div>
    //   <div
    //     onScroll={onScrollOrders}
    //     className="h-full w-full pt-24 pb-24 px-6 box-border overflow-auto scroll"
    //   >
    //     {err && (
    //       <span className="text-red-700 text-xl font-semibold w-full text-center border border-red-700 block py-2 mb-1 ">
    //         {err}
    //       </span>
    //     )}
    //     {successOrder && (
    //       <span className="text-green-600 text-xl font-semibold w-full text-center border border-green-600 block py-2 mb-1 ">
    //         Success Order
    //       </span>
    //     )}
    //     <form action="" className="flex flex-col w-full mb-2">
    //       <input
    //         ref={address}
    //         type="text"
    //         placeholder="Add Address"
    //         className="text-lg outline-none border-2 border-cyan-300 focus:border-cyan-500 my-1 p-1 rounded "
    //       />
    //       <input
    //         ref={phone}
    //         type="number"
    //         placeholder="Phone number"
    //         className="text-lg outline-none border-2 border-cyan-300 focus:border-cyan-500 my-1 p-1 rounded "
    //       />
    //     </form>
    //     <h1 className="text-3xl font-bold mb-4">
    //       {orders.length > 0 ? "Sifarişləriniz" : "Sifarişiniz yoxdur"}
    //     </h1>
    //     <ul>
    //       {orders.map((order) => (
    //         <OrdersItem
    //           key={order.id}
    //           order={order}
    //           setOrders={setOrders}
    //           modalEl={modalEl}
    //           orders={orders}
    //         />
    //       ))}
    //     </ul>
    //   </div>
    //   {orders.length > 0 &&
    //     ((
    //       <div className="h-1/4 w-full absolute bottom-0 left-0 bg-gradient-to-t from-white flex items-end">
    //         <div className="px-6 w-full h-1/2 flex items-start bg-white">
    //           <button
    //             onClick={confirmOrders}
    //             className="w-full bg-blue h-14 rounded-md flex justify-between items-center px-4 box-border"
    //           >
    //             <div className="flex">
    //               <span className="bg-white text-blue rounded-full text-md font-semibold px-2 py-0.5">
    //                 {orders.reduce((init, curr) => init + curr.count, 0)}
    //               </span>
    //               <span className="text-xl text-white font-semibold ml-4">
    //                 Ödənişi təstiqləyin
    //               </span>
    //             </div>
    //             <span className="text-white text-xl">
    //               {orders.reduce(
    //                 (init, curr) => init + curr.price * curr.count,
    //                 0
    //               )}
    //               .00 AZN
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //     ) ||
    //       null)}
    // </>
  
}

export default OrdersModal;
