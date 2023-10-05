import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = total.toFixed(2);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <h1 className="text-3xl">Total Items: {cart.length} </h1>
      <h1 className="text-3xl">Total price: ${totalPrice} </h1>
      <button className="btn btn-warning btn-sm">Pay</button>
    </div>
  );
};

export default MyCart;
