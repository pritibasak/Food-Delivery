import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import empty from "../assets/empty.png";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartData = Object.keys(cartItems).map(
    (element) => cartItems[element].item
  );
  const totalPrice = Object.keys(cartItems).reduce(
    (total, currentPrice) => total + (cartItems[currentPrice].price*cartItems[currentPrice].count),
    0
  );
  const dispatch = useDispatch();
  const handleRemoveitems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-5 p-5 text-center">
      <div className="w-6/12 m-auto">
        <div className="flex justify-between">
       {totalPrice>0 && <button
          className="rounded-xl mx-1 px-8 py-2 text-black bg-slate-200 m-3 font-semibold border-2 border-cyan-300 hover:bg-gray-300 hover:ring-2"
          onClick={handleRemoveitems}
        >
          Empty Cart
        </button>}
        {totalPrice === 0 && <h1 className="font-semibold font-serif">Cart Empty. Please add some items</h1>}
        <button className="rounded-xl px-8 py-2 text-black bg-slate-200 m-3 font-semibold border-2 border-cyan-300 hover:bg-gray-300 hover:ring-2">
          <Link
            to="/"
          >Add Items</Link></button>
          </div>
        <ItemList items={cartData} type={"cart"} />
        {totalPrice>0 && <h4 className="font-bold mx-20 my-5 font-mono text-xl">Total:{Math.ceil(totalPrice)}</h4>}
        {totalPrice>0 &&<button className="rounded-lg px-8 py-2 font-serif text-white bg-slate-950 m-3 font-semibold border-2 border-cyan-300 hover:bg-slate-700 hover:ring-2">Pay</button>}
        
      </div>
    </div>
  );
};

export default Cart;
