import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //how cartReducer?????no relevance with name.May be cartSlice.reducer imported as cartReducer

const appStore=configureStore({
  reducer:{
    cart: cartReducer,
  },

}); 


export default appStore;