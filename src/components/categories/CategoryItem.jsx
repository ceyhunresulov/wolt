function CategoryItem({ name, img }) {
  return (
    <li
      className={`h-full rounded-lg overflow-hidden shadow cursor-pointer hover:scale-[1.03] transition-all duration-200 ease-in group`}
    >
      <div className="w-full overflow-hidden">
        <img
          src={require(`../../images/${img}`)}
          alt=""
          className="transition-all duration-200 ease-in group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-4 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-thirdColor mb-[2px]">
          {name}
        </h3>
        <span className="text-sm text-secondaryColor mt-[2px]">100 məkan</span>
      </div>
    </li>
  );
}

export default CategoryItem;
