import React from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
    const [listOfResturants, setListOfResturants] = useState(resList);
    const [searchval,setsearchval]=useState("");

    // useEffect(()=>{ 
    //     fetchdata();
    // },[]);

    // const fetchdata= async () => {
    //     const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1");

    //     const json= await data.json();

    //     console.log(json);
    //     setListOfResturants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //  }
    // if(listOfResturants === 0){
    //     return <div>Loading...</div>; 
    // }
    const onlineStatus=useOnlineStatus();
             console.log(onlineStatus);
    return (
        <div className="body">
            <div className="filter">
               <div className="search">
               <input type="text" className="search_box" value={searchval} onChange={(e)=>{
                setsearchval(e.target.value);
               }}
               
               ></input>
               <button className="search_button" onClick={() => {
                const filtered = resList.filter((res) => 
                   res.info.name.toLowerCase().includes(searchval.toLowerCase())
             );
             setListOfResturants(filtered);
            }}> Search</button>
            </div>
            
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfResturants.filter((res) => res.info.avgRating > 4);
                    setListOfResturants(filteredList);
                }}>Top Rated Resturants</button>
            </div>
             
             

            <div className="res-container">
                {listOfResturants.map((resturant) => (
                    <ResturantCard key={resturant.info.id} resList={resturant}/>
                ))}
            </div>
        </div>
    )
}
export default Body;