import { useState } from "react";

const Users = (props) =>{
    const [count, setCount] = useState(0);
    console.log("function render")
    return (
        <div className="user-card">

            <button
                onClick={()=>{
                    let num = count + 1;
                    setCount(num);
                }}
            >Click me</button>
            <h1>{props.name}</h1>
            <h2>Profession: {props.profession}</h2>
            <h3>Contact: {props.contact}</h3>
            <h4>Count: {count}</h4>
        </div>
    )
}

export default Users;