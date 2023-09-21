import RestaurantCards from "./RestaurantCards";
import restList  from "../utils/moxkData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body =()=>{
    //Locale state variable = super powerful variable;

   /* const [listOfRest, setListOfRest] = useState([
        {
            info: {
              id: "28451",
              name: "Grover Sweets & Bakers",
              cloudinaryImageId: "at6kqassx47vpnzcpvwm",
              locality: "Bhagwati Garden",
              areaName: "Uttam Nagar",
              costForTwo: "₹300 for two",
              cuisines: [
                "North Indian",
                "Sweets",
                "Street Food",
                "Snacks",
                "Indian",
                "Tandoor",
                "Desserts"
              ],
              avgRating: 4.2,
              sla: {
                deliveryTime: 26,
              },
              
            }
        },
        {
            info: {
                id: "183329",
                name: "Burger King",
                cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                locality: "Rama Park",
                areaName: "Dwarka",
                costForTwo: "₹350 for two",
                cuisines: [
                "Burgers",
                "American"
                ],
                avgRating: 2.2,
                sla: {
                deliveryTime: 27,
                },
            }
        },
        {
            info: {
                id: "64035",
                name: "The Burger Club",
                cloudinaryImageId: "jtloihnjdnzuvdg1y8qo",
                locality: "Sector 15",
                areaName: "Dwarka",
                costForTwo: "₹250 for two",
                cuisines: [
                "Fast Food",
                "American",
                "Beverages",
                "Desserts"
                ],
                avgRating: 4.1,
                
                sla: {
                deliveryTime: 28,
                }
            },
        },
        {
            info: {
                id: "387447",
                name: "NIC Ice Creams",
                cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
                locality: "Kakrola",
                areaName: "Uttam Nagar",
                costForTwo: "₹120 for two",
                cuisines: [
                "Ice Cream",
                "Desserts"
                ],
                avgRating: 3.6,
                sla: {
                deliveryTime: 22,
                },
            },
        }
    ]);
    */
    // we will use mockdate in useState
    // const [listOfRest, setListOfRest] = useState(restList);
    const [listOfRest, setListOfRest] = useState([]);
    /*let newRestList = [
        {
            info: {
              id: "28451",
              name: "Grover Sweets & Bakers",
              cloudinaryImageId: "at6kqassx47vpnzcpvwm",
              locality: "Bhagwati Garden",
              areaName: "Uttam Nagar",
              costForTwo: "₹300 for two",
              cuisines: [
                "North Indian",
                "Sweets",
                "Street Food",
                "Snacks",
                "Indian",
                "Tandoor",
                "Desserts"
              ],
              avgRating: 4.2,
              sla: {
                deliveryTime: 26,
              },
              
            }
        },
        {
        info: {
            id: "183329",
            name: "Burger King",
            cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            locality: "Rama Park",
            areaName: "Dwarka",
            costForTwo: "₹350 for two",
            cuisines: [
            "Burgers",
            "American"
            ],
            avgRating: 2.2,
            sla: {
            deliveryTime: 27,
            },
        }
        },
        {
        info: {
            id: "64035",
            name: "The Burger Club",
            cloudinaryImageId: "jtloihnjdnzuvdg1y8qo",
            locality: "Sector 15",
            areaName: "Dwarka",
            costForTwo: "₹250 for two",
            cuisines: [
            "Fast Food",
            "American",
            "Beverages",
            "Desserts"
            ],
            avgRating: 4.1,
            
            sla: {
            deliveryTime: 28,
            }
        },
        },
        {
        info: {
            id: "387447",
            name: "NIC Ice Creams",
            cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
            locality: "Kakrola",
            areaName: "Uttam Nagar",
            costForTwo: "₹120 for two",
            cuisines: [
            "Ice Cream",
            "Desserts"
            ],
            avgRating: 3.6,
            sla: {
            deliveryTime: 22,
            },
        },
        }
    ]*/

    useEffect(()=>{
        console.log('body render');

        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6329734&lng=77.0188755&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRest(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }

    // till loading data

    if (listOfRest.length === 0){
        // return <h1>Loading....</h1>
        return <Shimmer />
    }
    return (
        <div className="body">
            {/* <div className="search-box">Search</div> */}
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    //WE CANNOT DO THIS
                    // newRestList = newRestList.filter((res) => res.info.avgRating > 4);
                    // console.log(newRestList);
                    let modifiedList = listOfRest.filter((res) => res.info.avgRating > 4);
                    setListOfRest(modifiedList);
                }}>Top Rates Restaurant</button>
            </div>
            <div className="restarant-box">
                 {/* <RestaurantCards resData={restList[0]}/> not a good way give array indexing */}

                 {
                   listOfRest.map(resturant => (
                   <RestaurantCards key={resturant.info.id} resData= {resturant}/>)) 
                 }
            </div>
        </div>
    )
}

export default Body;