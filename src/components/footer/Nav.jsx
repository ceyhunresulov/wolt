import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Nav({ title, list }) {
  const [openList, setOpenList] = useState(false);
  const [listHeight, setListHeight] = useState();
  const li = useRef();

  const showList = () => {
    setOpenList(!openList);
  };

  useEffect(() => {
    const marginBottom = getComputedStyle(
      document.querySelector(".item")
    ).marginBottom;
    setListHeight(
      (li.current.clientHeight + parseInt(marginBottom)) * list.length
    );
  }, []);
  return (
    <div className="">
      <button
        onClick={showList}
        className="title font-base w-full md:w-auto py-2 relative group"
      >
        <div className="h-full w-[150%] group-hover:bg-[#ffffff1f] absolute top-0 -left-24 -z-0 md:hidden"></div>
        <span className="z-10">{title}</span>
        <IoIosArrowDown
          className={`md:hidden text-xl z-10 ${openList ? "rotate-180" : ""}`}
        />
      </button>
      <ul
        style={openList ? { height: listHeight + "px" } : { height: 0 }}
        className={`text-sm text-white overflow-hidden md:!h-auto transition-all ease-linear duration-200 
        `}
      >
        {list.map((item, i) => (
          <li key={i} ref={li} className="mb-3 item">
            <a
              className="hover:underline transition-all ease-in duration-300"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
