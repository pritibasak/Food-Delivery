//import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

//console.log(resObj.length)

const AppLayout = () => {
  //console.log(<Body />)
  return (
    <div className="app">
      <Header />
       {/** if path=/   <Body /> */}
      
       {/** if path=/about  <About />*/}
       
       {/** if path=/contact    <Contact />*/}
       <Outlet />
    </div>
  );
};

const appRouter=createBrowserRouter([
{ path: "/", 
  element: <AppLayout/>, //because it would route to our home page
  //children of AppLayout()
  //Children routes
  children:[
  {
    path: "/",
    element:<Body/>,
      //errorElement: <Error />,
  },
  {
    path: "/about",
    element:<About/>,
    //errorElement: <Error />,
   },
   {
    path: "/contact",
    element:<Contact/>,
     //errorElement: <Error />,
   },
   {
    path: "/restaurants/:resId",  //a dynamic path for restaurant id where the resId to be fetched by useParams hook
    //this "/restaurants/" to be set from Body using Link to
    element: <RestaurantMenu/>,
   }
  ],
  errorElement: <Error />,
}
]);//creating routing configuration and assigned to appRouter
//this configuration is some information that will define what will happen on some specific route

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
