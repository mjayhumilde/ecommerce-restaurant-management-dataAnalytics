const ProdButton = ({ buttonName, buttonClick, product }) => {
  return (
    <button
      onClick={() => buttonClick(product)}
      className="bg-indigo-500 hover:bg-indigo-600 w-full text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
    >
      {buttonName}
    </button>
  );
};

export default ProdButton;
