import User from "./User";
import UserClass from "./UserClass";
//import React from "react";  OR
import { Component } from "react";//destructuring from react object
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props)
  {
    super(props);
    console.log("About Constructor")
  }
componentDidMount(){

    console.log("About component did mount")
}
componentDidUpdate(){
  console.log("About class componentdidupdate called") 
  }

  componentWillUnmount()
{
console.log("About class componentWillUnmount called")
}

  render() {
    console.log("About Render")
    return (
      <div>
        <h1>About Us Class Component</h1>
        <div>
          <UserContext.Consumer>
          {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste react web series</h2>
        <UserClass
          name={"Akshay(Class component)"}
          location={"Dehradun Class"}
        />
      </div>
    );
  }
}
/*const About=()=>{
 return <div>
   <h1>About Us</h1>
   <h2>This is namaste react web series</h2>
   <UserClass name={"Akshay(Class component)"} location={"Dehradun Class"}/>
 </div>

}*/

export default About;
