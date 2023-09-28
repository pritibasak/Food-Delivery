import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
           items:[],
    },
    reducers:{
       /**  {
             payload:"pizza",
            }
            this object is getting initiated from ItemList once we click on add button and call
            handleAdditem() inside which we call a dispatch function like dispatch(addItems("pizza"))
            so the above mentioned object will be sent as the 2nd argument of addItems(state,action)
            that's why we write action.payLoad it means pizza added to items[] array
            the whole process in detail is fully abstracted that how it works behind the scene
          */
       addItems:(state,action)=>{
        //we are directly mutating the state ie itemState here, so these all reducers function are impure functions  
        /**
         * in vanilla redux we were not supposed to mutate the state
         * mistakenly many developers used to do 
         * in vanilla redux a newState could have been created
         * const newState=[...state];
         * newState.items.push(action.payload);
         * return newState
         */

        /**
         *In RTK we have to change the state rather 
         * Changing state is mandatory
         * in newRTK, still that immutability is followed but behind the scene by redux itself
         * It's abstracted from the developers now
         * redux uses immer library to do this
         */
        
        state.items.push(action.payload);    
       } ,
       removeItems:(state,action)=>{
        state.items.pop();//for now just we removed the last item added from the array
        //splice or any other logic for removing items can be added
     } ,
       clearCart:(state,action)=>{
         console.log(state)
         console.log(current(state))
         //state.items.length=0;
         return {items:[]};//it works
        //state.items=[];//it's working I tested
        //state=[];//this won't work because we are using just a reference of state not the state itself
        //suppose state=["pizza"], so orginal state is holding pizza
        //now if I do state=[] or state=['burger'] it means we are not actually mutating the original state that holds 'pizza'
        //we are just changing a reference or local state of the original state
        //state.items=['priti'] --> here we aren't mutating the state just changing reference
        //this won't work here because behind the scene immer library is preventing this
        //as we know after all state is immutable
        //however for developers benefit, we can use state.x.y.....but immer is taking existing state and new state(changed)
        //then calculating the difference between two
        //finally it's returning that difference only without changing the actual state BTS
        //RTK says either we mutate the existing state or return a new state
     } ,
    },
});

export const {addItems,removeItems,clearCart}=cartSlice.actions;

export default cartSlice.reducer;

//Behind the scene how cartSlice looks like when returned by createSlice()
/**
 * cartSlice={
 * actions:{
 * 
 * },
 * reducer:{
 * 
 * },
 * }
 */
//Basically cartSlice is a big object which is returned by createSlice() function with two properties actions and reducer
//actions is containing the list of all reducers functions ie. additems, removeitems and clearitems
//Hence,while exporting we destructure from the actions
//reducer???--> want to know details of this object
//Next we will add our cartSlice inside our redux appSotre created earlier and added in App.js


/**Add button clicked
 * dispatch action sent 
 * dispatch action will invoke the reducers object function which one would be needed to add ,remove, empty etc
 * to add items in the cart reducers objects' addItems function(method) is invoked 
 * addItems() takes two parameters state(initialState object) & action(push new items in items[]) to modify the initialState items array
 * for clearCart() actuall we don't need any action to be used inside the function because we are removing all
 */