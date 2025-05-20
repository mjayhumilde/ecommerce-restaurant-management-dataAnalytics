import ProductCard from "../components/ProductCard";
import useProductsStore from "../store/useProductsStore";

const ProductPage = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 px-0 sm:px-6 md:px-10">
          {products.map((product) => (
            <div key={product.name}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
