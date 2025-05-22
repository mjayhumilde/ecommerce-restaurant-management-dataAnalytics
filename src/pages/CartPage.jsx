import { Trash2 } from "lucide-react";
import useCartStore from "../store/useCartStore";

const CartPage = () => {
  const { deleteFromCart } = useCartStore();
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <main>
      <section className="grid grid-cols-2">
        <div>
          {cart.map((product) => (
            <div className="relative grid grid-cols-2 p-2" key={product.id}>
              <div className="flex flex-col bg-green-800">
                <span>product name: {product.name}</span>
                <span>product price: {product.price * product.quantity}</span>
                <span>product quantity: {product.quantity}</span>
              </div>
              <div>
                <img
                  className="w-7/10"
                  src={product.imageCover}
                  alt={product.name}
                />
              </div>
              <div className="absolute bottom-5 left-5">
                <Trash2 onClick={() => deleteFromCart(product.id)} />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1>order Summary</h1>
          <div className="">
            {cart.map((product) => (
              <div className="bg-green-950" key={product.id}>
                name: {product.name}, quanity:{product.quantity}, price:₱{" "}
                {product.price * product.quantity}
              </div>
            ))}
            <div>total: ₱{total}</div>
            <div>
              <button
                onClick={() =>
                  console.log([{ user: "Lhenard Kaiser", purchase: cart }])
                }
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
