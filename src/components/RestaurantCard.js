import { CDN_LINK } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props; //props={resData:{}} destructuring occurs in resData
  console.log("function props"+props);//props object getting resList[0] and so on as its single property like props={resData:{}}
  //const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=props.resData?.info;//using direct props
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo} =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_LINK + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;
