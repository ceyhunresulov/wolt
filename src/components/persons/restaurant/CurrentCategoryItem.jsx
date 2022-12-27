import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrentProductItem from "./CurrentProductItem";

function CurrentCategoryItem({
  category,
  restId,
  categoryLoading,
  setCategoryLoading,
}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data: productsData } = await axios.get(
        "http://localhost:3000/products"
      );
      const currentProducts = await productsData.filter(
        (item) => item.catId === category.id && item.restId.includes(restId)
      );
      setProducts(currentProducts);
    };
    fetchProducts();
  }, [categoryLoading]);
  return (
    <div className="border p-6 box-border">
      <h1 className="text-2xl font-semibold">{category.name}</h1>
      {products.map((product) => (
        <CurrentProductItem
          key={product.id}
          products={products}
          product={product}
          restId={restId}
          setCategoryLoading={setCategoryLoading}
          categoryLoading={categoryLoading}
          category={category}
        />
      ))}
    </div>
  );
}

export default CurrentCategoryItem;
