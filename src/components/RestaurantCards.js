import { CDN_URL } from "../utils/constants";

const RestaurantCards =( props )=>{

    const { resData } = props; //destrucre
    const {cloudinaryImageId, name, avgRating, cuisines, sla, areaName} = resData?.info; //destructure with optional-chaining
    return(
        <div className="retaurant-card">
            <div className="card-img">
                <img src={ CDN_URL + cloudinaryImageId} />
            </div>
            <h2>{ name } </h2>
            <span className="ratings">{avgRating}  stars</span>
            <h3 className="cuisins">{cuisines.join("," + " ")}</h3>
            <h3 className="timings">{sla.deliveryTime} mins</h3>
            <h3 className="area">{areaName} </h3>
        </div>
    )
}

export default RestaurantCards;