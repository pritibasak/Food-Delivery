import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {data,showItems,setShowIndex,showIndex,currentIndex,dummy}=props;
    //console.log(data)
    const {title,itemCards}=data;
    //console.log('outshow'+showIndex)
    //console.log("outcurrent"+currentIndex)
  
    //const [showItems,setShowItems]=useState(false); //to hide & collapse the food items,initially false to make list collapsed
    //this power of state variable is taken away for implenting accordion auto collapse feature and hand over power of control to its parent for ifting state up
    const arrow1="⬇️";
    const arrow2="⬆️";
    const handleClick=()=>{
        if(showIndex===currentIndex)
        setShowIndex(null);
        else
        {
        //console.log("current"+currentIndex)//how currentIndex gets updated here once clicked
        setShowIndex(currentIndex)
        }
        //here for each click when setShowIndex will be called to update the state of the showIndex in Restaurantmenu
        //the entire RestaurantMenu component will be invoked every time.
     }

  return (
    <div className="w-6/12 shadow-lg bg-slate-100 p-4 mx-auto my-5 rounded-md hover:bg-gray-300 hover:ring-4">
      <div className="justify-between flex cursor-pointer" onClick={handleClick}>
      <span className="font-bold font-sans text-lg">{title} ({itemCards.length})</span>
      <span>{showItems ? arrow2 : arrow1}</span>
      </div>
      {showItems && <ItemList items={itemCards} dummy={dummy} />}
    </div>
  );
  }
export default RestaurantCategory;