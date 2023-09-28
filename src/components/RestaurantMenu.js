import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  //const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  //console.log(resId);

  const restInfo = useRestaurantMenu(resId);
  //console.log(restInfo);

  const dummy="Dummy Data";//for prop drilling concept only

  const [showIndex,setShowIndex]=useState(null);

  /*useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };*/

  if (restInfo === null) return <Shimmer />;

  //name of resturant,cuisines types and price
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  //menulist for each restaurant
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  //console.log(itemCards);
  //console.log(restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log("menu");
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
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
