import ProdButton from "./products/ProdButton";

const ProductCard = ({ imageCover, name, price }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <div className="relative w-full h-48 md:h-64">
        <img
          className="object-cover w-full h-full"
          src={imageCover}
          alt="Pizza"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 text-ellipsis overflow-hidden text-nowrap">
          {name}
        </h2>
        <p className="text-gray-600 text-sm mb-3">₱{price}</p>
        <ProdButton buttonName={"Add to Cart"} />
      </div>
    </div>
  );
};

export default ProductCard;
