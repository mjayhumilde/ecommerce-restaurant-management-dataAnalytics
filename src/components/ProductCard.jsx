import ProdButton from "./products/ProdButton";
import useCartStore from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="overflow-hidden bg-white rounded-md shadow-md">
      <div className="relative w-full h-48 md:h-64">
        <img
          className="object-cover w-full h-full"
          src={product.imageCover}
          alt="Pizza"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 overflow-hidden text-lg font-semibold text-gray-800 text-ellipsis text-nowrap">
          {product.name}
        </h2>
        <p className="mb-3 text-sm text-gray-600">₱{product.price}</p>
        <ProdButton
          buttonName={"Add to Cart"}
          buttonClick={addToCart}
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductCard;
