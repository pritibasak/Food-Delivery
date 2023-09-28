import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //how cartReducer?????no relevance with name.May be cartSlice.reducer imported as cartReducer

//const { configureStore } = require("@reduxjs/toolkit");

const appStore=configureStore({
//this reducer is a big whole app reducer of all the small reducer of each slice what we exported and imported
  reducer:{
    cart: cartReducer,
    //user:userReducer, if we have userReducer
  },

}); 
//we have added slices to our store. This reducer is basically a combination of all the small slices we created using createSlice({})
//For each slice we have different reducer alreay and adding all those reducer to the big whole app reducer at line 8

export default appStore;