import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable that is super powerful react variable by react useState hook
  //It's an array destructuring where useState() return an array and it gets destructured on two different elements
  //1st way
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //original list that won't change ever and it will be always used for filtration
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered list based on condition applied and to render by map
  //2nd way
  //const arr=useState(resList);
  //const [listOfRestaurants, setListOfRestaurants]=arr;
  //or
  //const listOfRestaurants=arr[0];
  //const setListOfRestaurants=arr[1];

  /**whenever state variable gets updated via set...(), react triggers reconciliation cycle
    (re-renders the component but only made changes to the new portion added/deleted/modified and update the actual DOM 
    accordingly)*/
  const [searchText, setSeacrhText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5981676&lng=88.3639986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //fetch is a function which is provided by the browser to fetch data from backend API.
    //fetch() always return a promise which is a javascript object

    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering of component which will get excuted based on a condition gets evaluated true.
  //if(listOfRestaurants.length===0)
  //return <Shimmer/>

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSeacrhText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            /* const filteredList = listOfRestaurants.filter(
              res=> res.info.avgRating>4
            );
            setListOfRestaurants(filteredList)*/
            setFilteredRestaurant(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
            //console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
        {console.log(filteredRestaurant.length)}
      </div>
    </div>
  );
};

export default Body;
