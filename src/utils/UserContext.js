import { createContext, useContext } from "react";

const UserContext=createContext({
 loggedInUser: "Default User",
 setUserName:()=>{}
})

export default UserContext; 