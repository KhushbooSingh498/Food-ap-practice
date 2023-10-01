import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

const RestMenuPage = () => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const { restId } = useParams();
    // console.log(restId);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + restId);

        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6329734&lng=77.0188755&restaurantId=610732&catalog_qa=undefined&submitAction=ENTER
        const json = await data.json();

        setResMenu(json.data);
        console.log(json.data);
    }
    if(resMenu === null){return <Shimmer />}
    const {name, cuisines, costForTwoMessage } = resMenu?.cards[0]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards);

    return (
        <div className="menu-page">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
            
        </div>
    )
}

export default RestMenuPage;