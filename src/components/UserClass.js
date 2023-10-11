//class based components
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);

        this.state = {
            count:0,
            count2 : 1,

            userInfo: {
                // avatar_url: "",
                // name : "dummy",
                // location: "Default",
                // contact: "null"

            }
        }
        // console.log(this.props.name + "Child constructor");


    }
   async componentDidMount(){

        const data = await fetch("https://api.github.com/users/KhushbooSingh498");

        const json = await data.json();
        //Im for API
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log('component did update');
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }
    render(){
        // const {name, profession, contact } = this.props;
        const {count, count2} = this.state;
        const {avatar_url, name, location, contact} = this.state.userInfo;
        // debugger;
        // console.log(this.props.name + "Child Render");

        return (
            <div className="user-card">
                {/* <h1>Count : {this.state.count}</h1> */}
                <button onClick={() =>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increas</button>
                <h1>Count : {count}</h1>
                <img src={avatar_url}/>
                <h1>Name : {name}</h1>
                <h2>Contact : {contact}</h2>
                <h3>Location : {location} </h3>
            </div>
        )
    }
}

export default UserClass;