import { CDN_URL } from "../utils/constants";



const ResturantCard = ({resList}) =>{
    const { cloudinaryImageId, name, cuisines, avgRating, } = resList?.info;
    return (
      <div className="res-card">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>Rest Name- {name}</h3>
        <h4>Cuisines- {cuisines.join(" , ")} </h4>
        <h4>Rating- {avgRating}</h4>
        <h4>Making Time-{resList.info.sla.slaString}</h4>
      </div>
    );
}
export default ResturantCard;