import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props; //props={resData:{}} destructuring occurs in resData
  //console.log("function props" + props); //props object getting resList[0] and so on as its single property like props={resData:{}}
  //const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=props.resData?.info;//using direct props
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  console.log("card")

  return (
    <div className="group m-5 p-4 w-[250px] h-[450px] bg-slate-200 rounded-lg shadow-lg hover:border border-solid border-slate-600 hover:cursor-pointer hover:ring-[3px]
     ring-offset-stone-400 hover:h-[420px] hover:shadow-slate-900">
      <img
        alt="res-logo"
        className="rounded-lg w-[300px] h-[200px]"
        src={CDN_LINK + cloudinaryImageId}
      />

      <h3 className="group-hover:text-sm  font-bold p-1 text-l non-italic hover:italic shadow-xl">{name}</h3>
      <h4 className="group-hover:text-sm p-1">{cuisines.join(", ")}</h4>
      <h4 className="group-hover:text-sm p-1">{avgRating}</h4>
      <h4 className="group-hover:text-sm p-1">{costForTwo}</h4>
      <h4 className="group-hover:text-sm p-1">{deliveryTime + " minutes"}</h4>
    </div>
  );
};

//Higher order compnent--> A function that would take an existing component and return an enhanced restaurant card 
//with Veg label on it


//Sequence of this higher order function usage 
/**
 * The higher order function/component withVeglabel() defined inside RestaurantCard Component
 * In the Body const RestaurantCardVeg=withVegLabel(RestaurantCard) line calls withVeglabel twice
 * once for first time when shimmer appears for no restaurants and then due to useEffect() and updating list of restaurants
 * Since withVeglabel() returns one more function and it would be assigned to RestaurantCardVeg in Body
 * RestaurantCardVeg --> it can be now used inside Body return part as a new functional component just
 * RestaurantCardVeg is only responsible to show a new Label called Veg and call <RestaurantCard/> to show rest of the info
 * RestaurantCardVeg --> it would be called from Body return if any restaurant's isOpen property is true along with details of that restaurant
 * Once called the control will be shifted to return (props)=>{} inside withVegLabel
 * this props now will be destructured by spread operator props={resData:{}}
 * RestaurantCard(props)=> props={...props} //destructured and copied too
 * Note: export const withVegLabel=(RestaurantCard) this RestaurantCard parameter is not same at all with <RestaurantCard {...props}/> 
 * Even we can give any name to const withVegLabel=(RestaurantCard) this RestaurantCard 
 * Even it's not at all needed actually to pass any argument for withVeglabel higher order function as there is no use of passed argument 
 * But to show it as a pure function we can pass a argument which won't be used to be modified rather higher order component will return a new function/funtional component
*/
 
export const withVegLabel=()=>{
  //console.log("label1")
  return (props)=>{
   // console.log(props)
   return <div>
     <label className="p-2 mx-2 absolute bg-black text-white rounded-lg">Veg🟢</label>
     <RestaurantCard {...props}/>
   </div>
  }
}

export default RestaurantCard;
