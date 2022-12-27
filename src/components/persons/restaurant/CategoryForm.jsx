import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function CategoryForm({
  categories,
  restId,
  categoryLoading,
  setCategoryLoading,
}) {
  const [error, setError] = useState(false);
  const [currentProducts, setCurrentProducts] = useState(null);
  const categoryId = useRef("");
  const productName = useRef("");
  const productImg = useRef("");
  const productPrice = useRef("");

  const formReset = () => {
    productName.current.value = null;
    productImg.current.value = null;
    productPrice.current.value = null;
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const currentProduct = currentProducts.find(
      (item) =>
        item.name.toLowerCase() === productName.current.value.toLowerCase()
    );
    if (currentProduct) {
      if (!currentProduct.restId.includes(restId)) {
        currentProduct.restId.push(restId);
        currentProduct.price.push({ id: restId, value: productPrice });
        await axios.put(
          `http://localhost:3000/products/${currentProduct.id}`,
          currentProduct
        );
        formReset();
        setError(false);
        setCategoryLoading(!categoryLoading);
      } else {
        setError("this product has been added!!!");
      }
    } else {
      const { data: response } = await axios.get(
        "http://localhost:3000/products"
      );
      const newProduct = {
        id: response.length + 1,
        catId: Number(categoryId.current.value),
        restId: [restId],
        name: productName.current.value,
        price: [{ id: restId, value: productPrice.current.value }],
        img: productImg.current.value,
      };
      if (
        !productImg.current.value ||
        !productName.current.value ||
        !productPrice.current.value
      ) {
        setError("There is an empty input!!!");
      } else {
        await axios.post("http://localhost:3000/products", newProduct);
        formReset();
        setError(false);
        setCategoryLoading(!categoryLoading);
      }
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setCurrentProducts(res.data));
  }, []);
  return (
    <form
      action=""
      className="flex flex-col items-center w-full borde p-8 box-border"
      onSubmit={addProduct}
    >
      {error && <p className="text-red-600 font-semibold">{error}</p>}
      <h1 className="text-2xl my-3">Add Product</h1>

      <select
        ref={categoryId}
        name=""
        id=""
        className="border-2 border-cyan-300 focus:border-cyan-600 focus:outline-none outline-none mb-3 p-2 box-border rounded w-1/2"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        ref={productName}
        type="text"
        placeholder="Product Name"
        className="border-2 border-cyan-300 focus:border-cyan-600 focus:outline-none outline-none mb-3 p-2 box-border rounded w-1/2"
      />
      <input
        ref={productImg}
        type="text"
        placeholder="Product image address"
        className="border-2 border-cyan-300 focus:border-cyan-600 focus:outline-none outline-none mb-3 p-2 box-border rounded w-1/2"
      />
      <input
        ref={productPrice}
        type="number"
        placeholder="Product price"
        className="border-2 border-cyan-300 focus:border-cyan-600 focus:outline-none outline-none mb-3 p-2 box-border rounded w-1/2"
      />
      <button
        type="submit"
        className="rounded transition-all ease-linear duration-200 py-1.5 px-3 bg-cyan-300 hover:bg-cyan-500 text-base text-white
        "
      >
        Add
      </button>
    </form>
  );
}

export default CategoryForm;
