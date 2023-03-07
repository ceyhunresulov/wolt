import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsAction } from "../../redux/actions/productsAction";
import ProductItems from "./ProductItems";

function Products() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentCategories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    console.log(id);
    dispatch(getProductsAction(+id));
  }, [id]);
  return (
    <div className="mt-20 lg:mt-0">
      {currentCategories.map((category) => (
        <div key={category.id} id={category.name} className="pt-16 lg:pt-20">
          <h2
            key={category.id}
            className="font-fredoka text-thirdColor !font-light text-xl transition-all ease-linear duration-500 uppercase mb-8 lg:text-2xl "
          >
            {category.name}
          </h2>
          {products
            .filter((product) => product.catId === category.id)
            .map((item) => (
              <ProductItems key={item.id} product={item} restId={+id} />
            ))}
        </div>
      ))}
    </div>
  );
}

export default Products;
