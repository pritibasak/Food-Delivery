import { useDispatch, useSelector } from "react-redux";
import { CDN_LINK_MENU } from "../utils/constant";
import { addItems, removeItems } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items,type,name}) => {
  const [addRemove, setAddRemove] = useState(new Set());

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  //cartItems={id:{items:"food card",count:count},id:{items:"food card",count:count}}
  //{33386464: {…}, 121794072: {…}}
  const obj={};
  Object.keys(cartItems).forEach((element)=>{
  if(obj[element])  obj[element]+=1;
  else              obj[element]=cartItems[element].count;
  })
  console.log(obj);

  const handleAddItem = (item, index) => {
    dispatch(addItems(item));
    let set = new Set([...addRemove]); //set constructor takes an array as argument and considers only unique in case of repetition
    set.add(index);
    setAddRemove(set);
  };
  const handleRemoveItem = (item, index) => {
    dispatch(removeItems(item));
    let set = new Set([...addRemove]); //set constructor takes an array as argument and considers only unique in case of repetition
    set.add(index);
    setAddRemove(set);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          className="p-2 m-2 border-blue-100 border-b-2 text-left flex justify-between "
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span>
                {" "}₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="absolute">
              <div id={item.card.info.id} className="flex justify-between">
                {((addRemove?.has(index) || type) && obj[item?.card?.info?.id]>0) && (
                  <button
                    onClick={() => handleRemoveItem(item, index)}
                    className="mx-10 my-1.5 text-lg text-white font-extrabold absolute cursor-pointer"
                  >
                    -
                  </button>
                )}
                {((addRemove?.has(index) || type) && obj[item?.card?.info?.id]!==0) ? (
                  <button
                    disabled
                    className="py-2 px-5 mx-8 w-20 bg-black text-white shadow-md rounded-lg ring-1"
                  >
                    {obj[item?.card?.info?.id]}
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddItem(item, index)}
                    className="py-2 px-5 mx-8 w-20 bg-black text-white  shadow-md rounded-lg ring-1"
                  >
                    Add
                  </button>
                )}
                {((addRemove?.has(index) || type) && obj[item?.card?.info?.id]>0) &&  (
                  <button
                    className="text-white mx-24 my-1.5 text-lg font-extrabold absolute cursor-pointer"
                    onClick={() => handleAddItem(item, index)}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
            {  item?.card?.info?.imageId  && <img
              src={CDN_LINK_MENU + item?.card?.info?.imageId}
              alt="Image Not available"
              className="w-full text-md text-center py-8"
            />}
            <h5 className="font-bold text-lg mx-8 px-5">{type && obj[item?.card?.info?.id]*item.card.info.price/100}</h5>
          </div>
        </div>
      ))}
    </div>
   
  );
};
export default ItemList;
