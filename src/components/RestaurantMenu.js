import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);
  //console.log(resId);

  const [showIndex,setShowIndex]=useState(null);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
 console.log(categories);
  return (
    <div className="text-center">
      <h1 className="my-5 text-3xl font-serif font-bold">{name}</h1>
      <p className="font-bold text-xl ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** We will build accordion feature for different category of food */}
      {categories.map((category,index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card.card.title}
          data={category?.card?.card}
          showItems={index===showIndex ? true:false}
          setShowIndex={(index)=>setShowIndex(index)}
          showIndex={showIndex}
          currentIndex={index}
          name={name}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
