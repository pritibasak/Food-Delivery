import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO_URL from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //let btnName= "Login";
  const [btnName, setBtnName] = useState("Login");
  
  const onlineStatus=useOnlineStatus();
  //Added for understanding useEffect hook in detail
  /*console.log("Header")
  useEffect(()=>{
    console.log("useEffect")
  })*/
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus? "✅" :"🔴" }</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
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
