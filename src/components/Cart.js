import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
 
  const cartItems = useSelector((store) => store.cart.items);
  
  const dummy = "Dummy Data"; 

  const dispatch=useDispatch();
  const handleRemoveitems=()=>{dispatch(clearCart())  }

  return (
    <div className="m-5 p-5 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="rounded-lg p-2 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
        onClick={handleRemoveitems}
        >
          Clear Cart
        </button>
        {cartItems.length===0 && <h1>Cart Empty. Please add some items</h1>}
        <ItemList items={cartItems} dummy={dummy} />
      </div>
    </div>
  );
};

export default Cart;
