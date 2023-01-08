import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setPerson, setModul }) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    let name = inputName.current.value,
      email = inputEmail.current.value,
      password = inputPassword.current.value;
    const persons = await axios.get("http://localhost:3000/persons"),
      data = persons.data;
    let checkPerson = data.find((item) => item.email === email);

    if (
      checkPerson &&
      checkPerson.name === name &&
      checkPerson.password === password
    ) {
      setPerson(checkPerson);
      inputName.current.value = "";
      inputEmail.current.value = "";
      inputPassword.current.value = "";
      setModul(false);
      localStorage.setItem("currentPerson", JSON.stringify(checkPerson));
      if (checkPerson.role != "user") navigate(`/${checkPerson.role}`);
    } else {
      setError(true);
    }
  };
  return (
    <>
      {(error && (
        <div className="border-2 absolute top-[20px] py-2 border-red-500 w-3/5 text-center text-red-500 ">
          change email or name or password
        </div>
      )) ||
        null}
      <h1 className="text-2xl my-5">Login</h1>
      <form
        action=""
        className="w-4/5 flex items-center flex-col mt-5"
        onSubmit={onHandleSubmit}
      >
        <input
          onChange={() => setError(false)}
          ref={inputName}
          type="text"
          placeholder="Add Name"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 mb-5 rounded"
        />
        <input
          onChange={() => setError(false)}
          ref={inputEmail}
          type="email"
          placeholder="Add Email"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
        />
        <input
          onChange={() => setError(false)}
          ref={inputPassword}
          type="password"
          placeholder="Add Password"
          className="text-lg w-full focus:outline-none border-4 py-2 px-2 rounded  mb-5"
        />
        <button
          type="submit"
          className="text-base self-start py-1.5 px-3 bg-cyan-300 hover:bg-cyan-500 rounded-md text-white transition-all linear duration-500"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
