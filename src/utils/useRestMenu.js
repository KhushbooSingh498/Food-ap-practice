import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId);

        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6329734&lng=77.0188755&restaurantId=610732&catalog_qa=undefined&submitAction=ENTER
        const json = await data.json();

        setResInfo(json.data);
        console.log(resInfo);
    };

    return resInfo;
};

export default useRestMenu;