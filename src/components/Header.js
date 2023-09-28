import { useState, useContext } from "react";
import { Link } from "react-router-dom";
//import LOGO_URL from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "../assets/foodlogo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName= "Login";
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  //Added for understanding useEffect hook in detail
  /*console.log("Header")
  useEffect(()=>{
    console.log("useEffect")
  })*/
  const { loggedInUser } = useContext(UserContext); //destructuring
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  //here useSelector is helping the header comonent to subscribe the RTK store by giving partial access to a
  //part of the store ie items array only
  //canst carItems will be assigned by returned array items[]

  //if my device size is greater than sm(small device width size) then teal else pink
  return (
    <div className="flex justify-between bg-teal-100 shadow-xl sm:bg-lime-100 lg:bg-pink-100">
      <div className="logo-container">
        <img className="w-72" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl ">
            <Link to="/cart">Cart( {cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
