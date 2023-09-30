import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/foodlogo.png";
import cartlogo from "../assets/cartlogo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const totalItems=Object.keys(cartItems).reduce((x,y)=> x+cartItems[y].count,0)

  return (
    <div className="flex justify-between bg-teal-100 shadow-xl sm:bg-lime-100 lg:bg-pink-100">
      <div className="logo-container">
      <Link to="/">  <img className="w-72" src={logo} /> </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        { /**  <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>*/}
          <li className="px-4 font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-7 mr-4 font-bold text-xl flex-wrap">
            <Link to="/cart"><img className="w-12 h-12" src={cartlogo}/>{totalItems}</Link>
          </li>
          <button
            className="login font-semibold"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
           {/** <li className="px-4 font-bold">{loggedInUser}</li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Header;
