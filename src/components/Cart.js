import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //for optimisation whenever we subscribe to the RTK store we must subscribe to the correct/required portion of the store instead of whole store
  //otherwise it would be a performance loss
  //here we are giving full access to the cart component by subscribing to the whole store.
  //for optimisation it's not right actually however code is correct
  //const store = useSelector((store) => store);//subscribed to whole RTK appStore
  //const cartItems=store.cart.items;//then we are accessing items array
  //suppose if something is happening in other slice may be user info, so there is no point to access whole store we need to access cart only
  //useSelector already helps to select the portion of the store that's why this hook is called useSelector


  const cartItems = useSelector((store) => store.cart.items);
  
  const dummy = "Dummy Data"; //for prop drilling concept only which was from parent RestaurantMenun to child
  //RestaurantCategory to child ItemList

  const dispatch=useDispatch();
  const handleRemoveitems=()=>{dispatch(clearCart())  } //calling dispatch action which is calling clearCart()

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
