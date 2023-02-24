function LoginBtns({ textColor }) {
  return (
    <div className="w-1/3 justify-end items-center hidden lg:flex">
      <button className={`text-sm font-medium ${textColor} `}>Daxil ol</button>
      <button className="bg-firstColor text-white px-4 py-[11px] ml-6 rounded-md text-base font-bold">
        Qeydiyyatdan keçin
      </button>
    </div>
  );
}

export default LoginBtns;
