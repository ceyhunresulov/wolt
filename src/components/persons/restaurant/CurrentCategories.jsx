import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import CurrentCategoryItem from "./CurrentCategoryItem";

function CurrentCategories({ restId }) {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const { data: categoriesData } = await axios.get(
        "http://localhost:3000/categories"
      );
      const currentCategories = await categoriesData.filter((item) =>
        item.restId.includes(restId)
      );
      setCategories(currentCategories);
    };
    fetchData();
  }, [categoryLoading]);

  return (
    <div className="w-full">
      <CategoryForm
        categories={categories}
        restId={restId}
        setCategoryLoading={setCategoryLoading}
        categoryLoading={categoryLoading}
      />
      {categories.map((category) => (
        <CurrentCategoryItem
          key={category.id}
          category={category}
          restId={restId}
          categoryLoading={categoryLoading}
          setCategoryLoading={setCategoryLoading}
        />
      ))}
    </div>
  );
}

export default CurrentCategories;
