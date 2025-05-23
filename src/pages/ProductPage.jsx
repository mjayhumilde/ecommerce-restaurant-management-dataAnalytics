import useProductsStore from "../store/useProductsStore";
import useAuthStore from "../store/useAuthStore";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const products = useProductsStore((state) => state.products);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userRole = useAuthStore((state) => state.userRole);

  return (
    <main>
      <section className="container mx-auto">
        {isAuthenticated && userRole === "admin" && (
          <div className="p-2">
            <button className="">Add Product</button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 px-0 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 sm:px-6 md:px-10">
          {products.map((product) => (
            <div key={product.name}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
