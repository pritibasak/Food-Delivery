import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItems: (state, action) => {
      console.log(action.payload);
      let id = action.payload.card.info.id;
      if (state.items[id]) {
        let obj = {
          item: action.payload,
          count: state.items[id].count + 1,
          price:
            action.payload?.card?.info?.price / 100 ||
            action.payload?.card?.info?.defaultPrice / 100,
        };
        state.items[id] = obj;
      }
      //state.items.push(action.payload);
      else {
        let obj = {
          item: action.payload,
          count: 1,
          price:
            action.payload?.card?.info?.price / 100 ||
            action.payload?.card?.info?.defaultPrice / 100,
        };
        state.items[id] = obj;
      }
    },
    removeItems: (state, action) => {
      if (state.items[action.payload.card.info.id].count > 0)
        state.items[action.payload.card.info.id].count -= 1;
      //state.items.pop();
    },
    clearCart: (state, action) => {
      //state.items.length=0;
      return { items: [] }; //it works
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
