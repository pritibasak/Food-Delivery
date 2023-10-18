# Parcel
Dev Build
Local Server
HMR = Hot Module Replacement
File Watching Algorithm - written in C++
Caching - Faster Builds
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code Splitting
Differential Bundling - support older browsers
Diagnostic
Error Handling
HTTPs
Tree Shaking - remove unused code
Different dev and prod bundles


# Food delivery 
/**

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */

# Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

# React Hooks
(Normal JS utility functions)

useState() - Superpowerful State Variables in react
useEffect()

# 2 types Routing in web apps
Client Side Routing
Server Side Routing


# Redux Toolkit
Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector


# Types of testing (devloper)
Unit Testing
Integration Testing
End to End Testing - e2e testing
Setting up Testing in our app
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom

#Food Delivery APP
1.	It is a food delivery app that offers convenient food delivery services. Users can order a wide variety of delicious dishes. 
2.	Successfully created the application basic structure from the scratch (without create-react-app) and used live API of ‘Swiggy’ to fetch the list of the restaurants and food menu.
3.	 It consists of the following features:
•	To search for restaurants by restaurant name & cuisines.
•	To filter restaurants by rating, pure veg, delivery time. 
•	To sort restaurants by price (low to high & high to low), rating, default.
•	To add items in the cart & remove from the cart.
•	Provides a summary of the items in the cart, including quantities, prices of individual items & total price.
•	User can add only one restaurant food items in the cart, if the cart already holds one restaurant items so it will be replaced by the new restaurant items chosen.
4.	Tech stack used:
•	React, React hooks, Custom hooks, React Router DOM, React context, React Redux and Redux Toolkit to build UI layer & maintain data layer.
•	Tailwind CSS: Used for styling the components and UI.
•	Parcel: Used for bundling and building the React app.
•	Jest: To write test cases for unit testing and integration testing.


