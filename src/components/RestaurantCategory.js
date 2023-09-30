import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    const {data,showItems,setShowIndex,showIndex,currentIndex,name}=props;

    const {title,itemCards}=data;
   
    const arrow1="⬇️";
    const arrow2="⬆️";
    const handleClick=()=>{
        if(showIndex===currentIndex)
        setShowIndex(null);
        else
        {
        setShowIndex(currentIndex)
        }
     }

  return (
    <div className="w-6/12 shadow-lg bg-slate-100 p-4 mx-auto my-5 rounded-md hover:bg-gray-300 hover:ring-4">
      <div className="justify-between flex cursor-pointer" onClick={handleClick}>
      <span className="font-bold font-sans text-lg">{title} ({itemCards.length})</span>
      <span>{showItems ? arrow2 : arrow1}</span>
      </div>
      {showItems && <ItemList items={itemCards} name={name}/>}
    </div>
  );
  }
export default RestaurantCategory;