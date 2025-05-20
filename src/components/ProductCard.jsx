import ProdButton from "./products/ProdButton";
import useCartStore from "../store/useCartStore";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <div className="relative w-full h-48 md:h-64">
        <img
          className="object-cover w-full h-full"
          src={product.imageCover}
          alt="Pizza"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-ellipsis overflow-hidden text-nowrap">
          {product.name}
        </h2>
        <p className="text-gray-600 text-sm mb-3">₱{product.price}</p>
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
