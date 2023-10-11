import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//first component
const Header = () =>{
    // let btnName = "Login"

    const [btnName, setBtnName] = useState("Login");

    const status = useOnlineStatus();
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
                    <li>Online status: { status ? '🟩' : '🟥'}</li>
                    <li><Link to={'/grocery'}>Grocery</Link></li>
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
