import Users from "./Users";
import UserClass from "./UserClass";

import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor");
    }
    componentDidMount(){
        // console.log("Parent did mount");
    }
    render(){
        // console.log("Parent render");

        return (
            <div>About us
        
                <Users name={"Khushboo singh function"} profession={"Software developer"} contact={"singhkhushboo498@gmail.com"} />
                <UserClass name={"first child class"} profession={"Software developer"} contact={"singhkhushboo498@gmail.com"} />
            
            </div>
        
          )
    }
    
  }

// const About = () => {
//   return (
//     <div>About us

//         <Users name={"Khushboo singh function"} profession={"Software developer"} contact={"singhkhushboo498@gmail.com"} />
//         <UserClass name={"Khushboo singh class"} profession={"Software developer"} contact={"singhkhushboo498@gmail.com"} />
//     </div>

//   )
// }

export default About;