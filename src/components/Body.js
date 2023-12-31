import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //original list that won't change ever and it will be always used for filtration
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //filtered list based on condition applied and to render by map
  const [sortedRestaurant, setSortedRestaurant] = useState([]); //sorted list based on condition applied and to render by map

  const [searchText, setSeacrhText] = useState("");

  //console.log(listOfRestaurants);
  const RestaurantCardVeg = withVegLabel(RestaurantCard); //RestaurantCardVeg to be treated as functional component

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5981676&lng=88.3639986&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSortedRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  //const { loggedInUser, setUserName } = useContext(UserContext);
  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!!Please check your internet connection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4 flex">
          <input
            type="text"
            className="hover:shadow-lg ring-2 m-3 hover:ring-4 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md px-7 pl-1 pr-10  text-sm shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 "
            placeholder="Search for restaurant or cuisines..."
            value={searchText}
            onChange={(e) => {
              setSeacrhText(e.target.value);
              setFilteredRestaurant(
                listOfRestaurants.filter((restaurant) =>
                  (restaurant.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                    restaurant.info.cuisines.join(",")
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) 
                    )
                )
              );
            }}
          />

          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={(e) => {
              //console.log(e);
              setFilteredRestaurant(
                listOfRestaurants.filter((restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase() ||
                    (searchText && (restaurant.info.cuisines.join(",")
                    .toLowerCase()
                    .includes( e.target.value.toLowerCase()) 
                    ))
                    )
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="p-0 m-0 flex items-center">
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.0
                )
              );
            }}
          >
            Ratings 4.0+
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.info?.veg === true
                )
              );
            }}
          >
            Pure Veg
          </button>
          <button
            className="rounded-lg px-3 py-2 text-sm bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter(
                  (restaurant) => restaurant.info?.sla?.deliveryTime <= 30
                )
              );
            }}
          >
            Delivery by 30 mins
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setSortedRestaurant([...listOfRestaurants]); //why from this line functional component not getting reinvoked
              setFilteredRestaurant(
                sortedRestaurant.sort((restaurant1, restaurant2) => {
                  let price1 = restaurant1.info?.costForTwo.match(/(\d+)/);
                  let price2 = restaurant2.info?.costForTwo.match(/(\d+)/);
                  return price1[0] - price2[0];
                })
              );
            }}
          >
            Price Low to High⬆️
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setSortedRestaurant([...listOfRestaurants]); //why from this line functional component not getting reinvoked
              setFilteredRestaurant(
                sortedRestaurant.sort((restaurant1, restaurant2) => {
                  let price1 = restaurant1.info?.costForTwo.match(/(\d+)/);
                  let price2 = restaurant2.info?.costForTwo.match(/(\d+)/);
                  return price2[0] - price1[0];
                })
              );
            }}
          >
            Price High to Low⬇️
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setSortedRestaurant([...listOfRestaurants]); //why from this line functional component not getting reinvoked
              setFilteredRestaurant(
                sortedRestaurant.sort((restaurant1, restaurant2) => {
                  return (
                    restaurant2.info?.avgRating - restaurant1.info?.avgRating
                  );
                })
              );
            }}
          >
            Sort By Rating
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-green-100 m-3 font-semibold border hover:bg-green-400 hover:ring-4"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter((restaurant) => restaurant)
              );
            }}
          >
            Default
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
