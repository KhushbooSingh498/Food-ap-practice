import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";

//first component
const Header = () =>{
    // let btnName = "Login"
    console.log('rendered');

    const [btnName, setBtnName] = useState("Login");
    return (
        <div  className="header">
            <div className="logo">
                <img src={ LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=>{
                        btnName === "Login" ? setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
