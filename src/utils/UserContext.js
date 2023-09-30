import { createContext, useState } from "react";

/*const UserContext=createContext({
 loggedInUser: "Default User",
 setUserName:()=>{}
})*/

const UserContext=createContext()
export const UserProvider=(props)=>{
  const [restaurantId,setRestaurantId]=useState("");
  console.log(props.children)
  return <UserContext.Provider value={{restaurantId,setRestaurantId}}>{props.children}</UserContext.Provider>

}

export default UserContext; 