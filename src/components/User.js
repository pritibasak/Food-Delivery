import { useState } from "react";
const User=(props)=>{
    const [count,setCount]=useState(0);
    const [count2]=useState(1);
    //console.log("count"+count)
    //count++;
     //console.log(setCount(2))
    const {name}=props;
    return <div className="user-card">
         <h2>Count:{count}</h2>
         <h2>Count2:{count2}</h2>
         <h2>Name:{name}</h2>
         <h3>Location: Dehradun</h3>
         <h4>Contact:@akshaymarch7 </h4>
    </div>
}

export default User;