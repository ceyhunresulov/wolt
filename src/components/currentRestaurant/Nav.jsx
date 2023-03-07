import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCurrentCategories } from "../../redux/actions/categoriesAction";

function Nav() {
  const { id } = useParams();
  const currentCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(0);
  const nav = useRef();
  const [fixedNav, setFixedNav] = useState(false);

  const clickCategory = (i) => {
    setActiveBtn(i);
  };

  useEffect(() => {
    dispatch(getCurrentCategories(+id));
    const onScroll = () => {
      const navTop = nav.current.getBoundingClientRect().top;
      if (navTop < 1 && window.innerWidth <1100) setFixedNav(true);
      else if (navTop < 112 && window.innerWidth >=1100) setFixedNav(true);
      else setFixedNav(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);

  return (
    <div ref={nav} className="mt-8 lg:mt-0 lg:w-2/12 ">
      <div
        className={`${
          fixedNav ? "fixed top-0 lg:top-28" : "absolute"
        }  bg-white w-full lg:w-auto left-0 py-2 box-border z-10 overflow-scroll flex justify-center items-center lg:left-auto lg:mt-0 lg:p-0`}
      >
        <ul className="flex text-secondaryColor w-desktop font-semibold text-sm uppercase lg:flex-col lg:items-start">
          {currentCategories.map((item, i) => (
            <li
              className={`mr-4 py-1 px-2 hover:text-firstColor transition-all ease-in duration-200 hover:lg:text-thirdColor box-border rounded-xl group lg:bg-transparent lg:px-0 lg:rounded-none ${
                i === activeBtn
                  ? "text-firstColor bg-bgFirst lg:text-thirdColor"
                  : ""
              }`}
              key={item.id}
            >
              <a onClick={() => clickCategory(i)} href={`#${item.name}`}>
                {item.name}
              </a>
              <span
                className={`hidden border group-hover:w-full border-thirdColor transition-all ease-in duration-200 lg:block ${
                  i === activeBtn ? "w-full" : "w-0 border-x-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
