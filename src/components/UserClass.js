import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //to assign this to props we need to call parent class construtcor using super(props)
    //Child class nevers recognises this keyword until super() function is called to invoke base class constructur
    console.log("Userclass constructor")
    this.state = {
      userInfo: {
        avatar_url:"",
        name: "",
        id:"",
        following: 0,
      },
    };
  }
   async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pritibasak");
    const json = await data.json();
    //console.log(json);
    this.setState({ userInfo:json});
    console.log("Userclass component did mount")//when already the component mounted on the dom.
    //console.log("call later");
  }
componentDidUpdate(){
console.log("User class componentdidupdate called")
}

componentWillUnmount()
{
console.log("User class componentWillUnmount called")
}

  render() {
    console.log("Userclass render")
    //console.log("render call");
    //const { name, location } = this.props;
    const { avatar_url,name,id,following } = this.state.userInfo;
    //debugger; to unserstand that initial render occurs with existing or dummy data which is defined inside constructor
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>id:{id}</h3>
        <h4>Contact:@akshaymarch7 </h4>
        <h4>Following:{following}</h4>
      </div>
    );
  }
}

export default UserClass;

//part of constructor
//this.state={count:0};//it's a state variable , state is reserved word here
//we took this count variable as an example just to understand setState() mainly

//part of render
/* const {count}={...this.state}//to destructure if we want with or without spread operator

    console.log( this.setState({
            //count:count+1 or
            //count:this.state.count+1
    }))
    // It will lead to infinite increasing
      <h2>Count:{count}</h2>
        <button onClick={()=>{
         this.setState({
                count:count+1// or valid
              //count:this.state.count+1 //or will work
              //this.state.count:this.state.count+1 //invalid won't work
              //this.state.count:count+1 //invalid won't work
         })
        }}>Count Increase</button>
*/
//this above was created just because we wanted to understand the concept and use of the local state variaable
//and how to update its state also via once button clicked count value gets increased and updated via setState()
