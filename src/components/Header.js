import { useState } from "react";
import { Link } from "react-router-dom";
//import LOGO_URL from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo  from '../assets/logo.png'

const Header = () => {
  //let btnName= "Login";
  const [btnName, setBtnName] = useState("Login");
  
  const onlineStatus=useOnlineStatus();
  //Added for understanding useEffect hook in detail
  /*console.log("Header")
  useEffect(()=>{
    console.log("useEffect")
  })*/

  //if my device size is greater than sm(small device width size) then teal else pink
  return (
    <div className="flex justify-between bg-teal-100 shadow-xl sm:bg-lime-100 lg:bg-pink-100">
      <div className="logo-container">
        <img className="w-80" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus? "✅" :"🔴" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
