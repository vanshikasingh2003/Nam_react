import { CDN_URL } from "../utils/constants";



const ResturantCard = ({resList}) =>{
    const { cloudinaryImageId, name, cuisines, avgRating, } = resList?.info;
    return(

        <div className="res-card">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(" , ")} </h4>
          <h4>{avgRating}</h4>
          <h4>{resList.info.sla.slaString}</h4>
        </div>
    )
}
export default ResturantCard;