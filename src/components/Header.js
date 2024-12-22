import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header= () => {
     const[button,setbutton] = useState("login"); 

    return (
     <div className="header">
        <div><img className="logo" src={LOGO_URL}></img></div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-button" onClick={()=> {
                    button === "login" 
                    ? setbutton("logout")
                    : setbutton("login")
                }}>{button}</button>
            </ul>
        </div>

     </div>   
    )
}
export default Header;