import { useEffect, useState } from "react";
import { getProducts } from "../helpers/ApiProductos";
import { CardProduct } from "../components/CardProduct";
import { Loading } from "../components/Loading";
import { SubMenu } from "../components/SubMenu";
;

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [filer, setFilter] = useState("");



  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const filteredProducts = (() => (filer === "" ? products : products.filter((prod) => prod.category === filer)))();

  return (
    <section>
      <article className="container mx-auto">
        <div className="pt-8 bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            All Products
          </h1>
        </div>
        <SubMenu setFilter={setFilter} />
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod) => <CardProduct product = {prod} />)
          ) : (
            <Loading />
          )}
        </div>
      </article>
    </section>
  );
};
