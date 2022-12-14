import axios from "axios";
import React, { useState, useRef } from "react";

function SignUp({ setShowSigns, setShowLogin }) {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState(false);
  const [courier, setCourier] = useState(false);
  const showAdmin = () => {
    setAdmin(true);
    setCourier(false);
    setUser(false);
  };
  const showUser = () => {
    setAdmin(false);
    setCourier(false);
    setUser(true);
  };
  const showCourier = () => {
    setAdmin(false);
    setCourier(true);
    setUser(false);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let name = inputName.current.value,
      email = inputEmail.current.value,
      password = inputPassword.current.value;
    const persons = await axios.get("http://localhost:3000/persons"),
      data = persons.data;
    let checkPerson = data.find((item) => item.email === email);
    if (!checkPerson) {
      const newPerson = {
        id: data.length + 1,
        name,
        email,
        password,
        role: (admin && "owner") || (user && "user") || "courier",
      };
      await axios.post("http://localhost:3000/persons", newPerson);
      setShowSigns(false);
      setShowLogin(true);
    } else {
      setError(true);
    }
  };
  return (
    <>
      {(error && (
        <div className="border-2 absolute top-[20px] py-2 border-red-500 w-3/5 text-center text-red-500 ">
          change email
        </div>
      )) ||
        null}
      <h1 className="text-2xl my-5">Sign Up</h1>
      <button
        className={`px-2 py-1 border rounded-lg text-white w-4/5 block mb-4 cursor-pointer ${
          admin ? "bg-cyan-500" : "bg-cyan-300"
        }`}
        onClick={showAdmin}
      >
        Admin
      </button>
      <button
        className={`px-2 py-1 border rounded-lg text-white w-4/5 block mb-4 cursor-pointer ${
          user ? "bg-cyan-500" : "bg-cyan-300"
        }`}
        onClick={showUser}
      >
        User
      </button>
      <button
        className={`px-2 py-1 border rounded-lg text-white w-4/5 block mb-4 cursor-pointer ${
          courier ? "bg-cyan-500" : "bg-cyan-300"
        }`}
        onClick={showCourier}
      >
        Courier
      </button>
      <form
        action=""
        className="w-4/5 flex items-center flex-col mt-5"
        onSubmit={onHandleSubmit}
      >
        <input
          ref={inputName}
          type="text"
          placeholder="Add Name"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 mb-5 rounded"
        />
        <input
          ref={inputEmail}
          type="email"
          placeholder="Add Email"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
          onChange={() => setError(false)}
        />
        <input
          ref={inputPassword}
          type="password"
          placeholder="Add Password"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
        />
        <button
          type="submit"
          className="text-base self-start py-1.5 px-2 bg-cyan-300 hover:bg-cyan-500 rounded-md text-white transition-all linear duration-500"
        >
          SignUp
        </button>
      </form>
    </>
  );
}

export default SignUp;
