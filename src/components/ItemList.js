import { useDispatch } from "react-redux";
import { CDN_LINK_MENU } from "../utils/constant";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items,dummy}) => {
   //console.log(items)
  //console.log(dummy)//to understand props drilling concept 
  const dispatch=useDispatch();
  //console.log(dispatch)

  const handleAddItem=(item)=>{ 
    console.log(item)
  //Dispatch an action
    dispatch(addItems(item));
    /**Behind the scene
      {
       payload:item,
      }
     */
  }

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-blue-100 border-b-2 text-left flex justify-between "
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span>
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <button className="p-2 mx-10 bg-black text-white  shadow-md rounded-lg ring-1"
              onClick={()=> handleAddItem(item)}>    {/**we can't write handleAdditem(item) it means we are calling this function by passing item right away */}
                Add+
              </button>
            </div>
            <img
              src={
                item?.card?.info?.imageId != null ? (
                  CDN_LINK_MENU + item?.card?.info?.imageId
                ) : (
                  <p>Image not available</p>
                )
              }
              alt="Image Not available"
              className="w-full text-md text-center py-8"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
