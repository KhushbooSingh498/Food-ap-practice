import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

//first component
const Header = () =>{
    // let btnName = "Login"
    console.log('rendered');

    const [btnName, setBtnName] = useState("Login");

    // useEffect(()=>{
    //     console.log('use effect called');
    // }, [btnName])
    return (
        <div  className="header">
            <div className="logo">
                <img src={ LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
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
