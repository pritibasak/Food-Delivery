import { useState,useEffect } from "react";

const useOnlineStatus = () => {

   const [onlineStatus,setOnlineStatus]=useState(true);

     //check if online
   useEffect(() => {
    window.addEventListener('online',()=>{  
     setOnlineStatus(true);
     //console.log("hook"+onlineStatus)
     } )

    window.addEventListener('offline',()=>{  
    setOnlineStatus(false);
    //console.log("hook"+onlineStatus)
        } )
       
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
