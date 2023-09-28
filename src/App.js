import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  //console.log(<Body />)

  //Authentication details of useinfo
  const [userName,setUserName]=useState();
  //Make an API call to retrieve the info about unsernamr and password
  useEffect(()=>{
  const data={
    name: "Priti Basak",
  }
  setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      {/** if path=/   <Body /> */}

      {/** if path=/about  <About />*/}

      {/** if path=/contact    <Contact />*/}
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, //because it would route to our home page
    //children of AppLayout()
    //Children routes
    children: [
      {
        path: "/",
        element: <Body />,
        //errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        //errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        //errorElement: <Error />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
        //errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId", //a dynamic path for restaurant id where the resId to be fetched by useParams hook
        //this "/restaurants/" to be set from Body using Link to
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
        //errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]); //creating routing configuration and assigned to appRouter
//this configuration is some information that will define what will happen on some specific route

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
