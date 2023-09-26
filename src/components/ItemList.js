import { CDN_LINK_MENU } from "../utils/constant";

const ItemList = ({ items,dummy}) => {
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
              <button className="p-2 mx-10 bg-black text-white  shadow-md rounded-lg ring-1">
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
