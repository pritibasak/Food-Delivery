import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { UserProvider } from "./utils/UserContext";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

//const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  return (
    <Provider store={appStore}>
    {/**<UserContext.Provider value={{restaurantName:restaurantName,setRestaurantName}}>*/}
      <UserProvider>
      <div className="app">
      <Header />
      <Outlet />
      </div>
      </UserProvider>
   {/**</UserContext.Provider>*/}
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
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurants/:resId", //dynamic routing
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]); 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
