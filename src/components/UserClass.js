import React from "react"
import { useState } from "react";


class UserClass extends React.Component{
    constructor(props)
    {
     console.log(props);   
     super(props);//to assign this to props we need to call parent class construtcor using super(props)
     //Child class nevers recognises this keyword until super() function is called to invoke base class constructur
     this.state={count:0};//it's a state variable , state is reserved word here
    }


    render(){
        const {name,location}=this.props;
        const {count}={...this.state}//to destructure if we want with or without spread operator

    /*console.log( this.setState({
            //count:count+1 or
            //count:this.state.count+1
    }))*/
    // It will lead to infinite increasing

        return <div className="user-card">
        <h2>Count:{count}</h2>
        <button onClick={()=>{
         this.setState({
                count:count+1// or valid
              //count:this.state.count+1 //or will work
              //this.state.count:this.state.count+1 //invalid won't work
              //this.state.count:count+1 //invalid won't work
         })
        }}>Count Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location:{ location}</h3>
        <h4>Contact:@akshaymarch7 </h4>
       </div>
        
    }
}

export default UserClass;