import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

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


 
export const withVegLabel=(RestaurantCard)=>{
  return (props)=>{
   return <div>
     <label className="p-2 mx-2 absolute bg-black text-white rounded-lg">Veg🟢</label>
     <RestaurantCard {...props}/>
   </div>
  }
}

export default RestaurantCard;
