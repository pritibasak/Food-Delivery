import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
 
  const cartItems = useSelector((store) => store.cart.items);
  const cartData=Object.keys(cartItems).map((element)=>cartItems[element].item)
  const dispatch=useDispatch();
  const handleRemoveitems=()=>{dispatch(clearCart())  }

  return (
    <div className="m-5 p-5 text-center">
      <div className="w-6/12 m-auto">
        <button className="rounded-lg p-2 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
        onClick={handleRemoveitems}
        >
          Clear Cart
        </button>
        {cartData.length===0 && <h1>Cart Empty. Please add some items</h1>}
        <ItemList items={cartData} type={"cart"}/>
      </div>
    </div>
  );
};

export default Cart;
