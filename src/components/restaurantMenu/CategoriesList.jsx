import { useEffect, useRef } from "react";

function CategoriesList({ category, categoriesEl }) {
  const clickedEL = useRef();

  const onHandleClick = (e) => {
    const otherEL = [...categoriesEl];
    otherEL.forEach((item) => {
      item.firstChild.classList.remove('text-black')
      item.lastChild.classList.add('w-0')
    });
    e.target.classList.add("text-black");
    e.target.nextElementSibling.classList.remove("w-0");
    e.target.nextElementSibling.classList.add("w-full");
  };

  useEffect(() => {
    const firstEl=categoriesEl[0]
    firstEl.firstChild.classList.add('text-black')
    firstEl.lastChild.classList.remove('w-0')
  },[]);
  return (
    <li
      ref={clickedEL}
      className={`group py-0.5 border-box transition-all linear duration-300 inline text-[#202125a3]  hover:text-black`}
    >
      <a
        onClick={onHandleClick}
        href={`#${category.name}`}
        className="text-sm font-medium transition-all linear duration-300"
      >
        {category.name}
      </a>
      <hr
        className={`transition-all linear duration-300 h-0 border-t-2 border-black mt-1 w-0 group-hover:w-full`}
      />
    </li>
  );
}

export default CategoriesList;
