import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore";

import { Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";

const CartPage = () => {
  const { deleteFromCart, clearCart } = useCartStore();
  const cart = useCartStore((state) => state.cart);
  const user = useAuthStore((state) => state.user);

  //initialized hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  function handlePurchase(data) {
    console.log({
      user,
      purchase: cart,
      addrs: data,
      orderStatus: "preparing ",
    });
    clearCart();
    reset();
  }

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
          <form
            onSubmit={handleSubmit(handlePurchase)}
            className="flex flex-col space-y-3"
          >
            <input
              type="text"
              placeholder="complete addrs"
              className="w-1/2 border"
              {...register("completeAddrs", {
                required: "adddrs is required",
              })}
            />
            {errors.completeAddrs && (
              <p className="italic text-red-600">thin fied is required!</p>
            )}
            <input
              type="number"
              placeholder="phone number"
              className="w-1/2 border"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            {errors.phoneNumber && (
              <p className="italic text-red-600">thin fied is required!</p>
            )}
            <input
              type="text"
              placeholder="email"
              className="w-1/2 border"
              {...register("email", {})}
            />
            <div className="">
              {cart.map((product) => (
                <div className="bg-green-950" key={product.id}>
                  name: {product.name}, quanity:{product.quantity}, price:₱{" "}
                  {product.price * product.quantity}
                </div>
              ))}
              <div>total: ₱{total}</div>
              <div>
                <button type="submit">Purchase</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CartPage;
