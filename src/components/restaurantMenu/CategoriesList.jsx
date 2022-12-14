import { useEffect, useRef} from "react";

function CategoriesList({ category, categoriesEl }) {
  const clickedEL = useRef();
  const onMouseOver = () => {
    clickedEL.current.classList.remove("text-[#202125a3]");
    clickedEL.current.classList.add("text-black");
    clickedEL.current.lastChild.classList.remove("w-0");
    clickedEL.current.lastChild.classList.add("w-full");
  };
  const onMouseOut = () => {
    if (!clickedEL.current.classList.contains("click")) {
      clickedEL.current.classList.remove("text-black");
      clickedEL.current.classList.add("text-[#202125a3]");
      clickedEL.current.lastChild.classList.remove("w-full");
      clickedEL.current.lastChild.classList.add("w-0");
    }
  };
  const onHandleClick = () => {
    const outsideClick = [...categoriesEl];
    let currentEl = outsideClick.splice(category.id - 1, 1);
    console.log(currentEl);
    currentEl[0].classList.add("click");
    outsideClick.forEach((item) => {
      if (item.classList.contains("text-black")) {
        item.classList.remove("text-black");
        item.classList.add("text-[#202125a3]");
        item.lastChild.classList.remove("w-full");
        item.lastChild.classList.add("w-0");
        item.classList.remove("click");
      }
    });
  };
  useEffect(() => {
    if (category.id == 1) {
      clickedEL.current.classList.add("text-black");
      clickedEL.current.classList.add("click");
      clickedEL.current.lastChild.classList.remove("w-0");
      clickedEL.current.lastChild.classList.add("w-full");
    }
  });
  return (
    <li
      ref={clickedEL}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onHandleClick}
      className={`py-0.5 border-box transition-all linear duration-300 inline text-[#202125a3]`}
    >
      <a href={`#${category.name}`} className="text-sm font-medium">
        {category.name}
      </a>
      <hr
        className={`transition-all linear duration-300 h-0 border-t-2 border-black mt-1 w-0`}
      />
    </li>
  );
}

export default CategoriesList;
