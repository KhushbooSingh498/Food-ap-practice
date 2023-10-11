import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";

const RestMenuPage = () => {
   
    // const [resMenu, setResMenu] = useState(null);
    
    const { restId } = useParams();
    // console.log(restId);

    const newData = useRestMenu(restId);

    if(newData === null){return <Shimmer />}
    const {name, cuisines, costForTwoMessage } = newData?.cards[0]?.card?.card?.info;

    const {itemCards} = newData?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
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