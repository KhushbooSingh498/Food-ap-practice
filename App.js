import React from "react";
import ReactDOM from "react-dom/client";

/*
 -Header
 --logo
 --NavItems
 -Body
 --Search
 --RestaurantContainer
 ---RestaurantCards
 ---- Img, title, ratings, cuisins, timing
 -Footer
 --CopyRight
 --Links
*/

//first component

const Header = () =>{
    return (
        <div  className="header">
            <div className="logo">
                <img src="https://svgsilh.com/svg/2085075.svg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCards =( props )=>{

    const { resData } = props; //destrucre
    const {cloudinaryImageId, name, avgRating, cuisines, sla, areaName} = resData?.info; //destructure with optional-chaining
    return(
        <div className="retaurant-card">
            <div className="card-img">
                <img src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            </div>
            <h2>{ name } </h2>
            <span className="ratings">{avgRating}  stars</span>
            <h3 className="cuisins">{cuisines.join("," + " ")}</h3>
            <h3 className="timings">{sla.deliveryTime} mins</h3>
            <h3 className="area">{areaName} </h3>
        </div>
    )
}

// const resObj = {
//     type: 'rest',
//     data: {
//         id: "28451",
//         name: "Grover Sweets & Bakers",
//         cloudinaryImageId: "at6kqassx47vpnzcpvwm",
//         locality: "Bhagwati Garden",
//         areaName: "Uttam Nagar",
//         costForTwo: "₹300 for two",
//         cuisines: [
//             "North Indian",
//             "Sweets",
//             "Street Food",
//             "Snacks",
//             "Indian",
//             "Tandoor",
//             "Desserts"
//         ],
//         avgRating: 4.2,
//         veg: true,
//         feeDetails: {
//             restaurantId: "28451",
//             "fees": [
//             {
//                 name: "BASE_DISTANCE",
//                 "fee": 4200
//             },
//             {
//                 name: "BASE_TIME"
//             },
//             {
//                 name: "ANCILLARY_SURGE_FEE"
//             }
//             ],
//             "totalFee": 4200
//         },
//         parentId: "91011",
//         avgRatingString: "4.2",
//         totalRatingsString: "10K+",
//         sla: {
//             deliveryTime: 26,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "26 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//         },
//         availability: {
//             "nextCloseTime": "2023-09-13 22:00:00",
//             "opened": true
//         },
//         badges: {
            
//         },
//         isOpen: true,
//         type: "F",
//         badgesV2: {
//             "entityBadges": {
//             "imageBased": {
                
//             },
//             "textBased": {
                
//             },
//             "textExtendedBadges": {
                
//             }
//             }
//         },
//         aggregatedDiscountInfoV3: {
//             "header": "30% OFF",
//             "subHeader": "UPTO ₹75"
//         },
//         loyaltyDiscoverPresentationInfo: {
//             "badgeType": "BADGE_TYPE_OFFER_PACK",
//             "offerSubText": "with offer pack",
//             "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
//         }
//     }
// }

const restList = [
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
        veg: true,
        feeDetails: {
          restaurantId: "28451",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "91011",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        sla: {
          deliveryTime: 26,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grover-sweets-and-bakers-bhagwati-garden-uttam-nagar-delhi-28451",
        "type": "WEBLINK"
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
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "183329",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 06:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-rama-park-dwarka-delhi-183329",
        "type": "WEBLINK"
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
        feeDetails: {
          restaurantId: "64035",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "2285",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        sla: {
          deliveryTime: 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
          "secondaryDiscountCallout": "+ EXTRA ₹75 OFF"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-burger-club-sector-15-dwarka-delhi-64035",
        "type": "WEBLINK"
      }
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
        avgRating: 4.6,
        "veg": true,
        feeDetails: {
          restaurantId: "387447",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 3600
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3600
        },
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 22,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-kakrola-uttam-nagar-delhi-387447",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82191",
        name: "Faasos - Wraps & Rolls",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Rama park main road",
        areaName: "Uttam Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "82191",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "21809",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        sla: {
          deliveryTime: 32,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-rama-park-main-road-uttam-nagar-delhi-82191",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82193",
        name: "Oven Story Pizza",
        cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
        locality: "Rama park main road",
        areaName: "Uttam Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "82193",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4700
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "3534",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 29,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "24-34 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oven-story-pizza-rama-park-main-road-uttam-nagar-delhi-82193",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "411519",
        name: "McDonald's",
        cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
        locality: "Sector 14",
        areaName: "Dwarka",
        costForTwo: "₹400 for two",
        cuisines: [
          "American"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "411519",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4800
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4800
        },
        "parentId": "630",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-sector-14-dwarka-delhi-411519",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82192",
        name: "Behrouz Biryani - Royal & Safe",
        cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
        locality: "Rama Park Road",
        areaName: "Uttam Nagar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "North Indian",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "82192",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4700
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4700
        },
        "parentId": "1803",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 28,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/behrouz-biryani-royal-and-safe-rama-park-road-uttam-nagar-delhi-82192",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82197",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "svqnp6sgrdj920ukuehy",
        locality: "Metro Station",
        areaName: "Uttam Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "82197",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "4925",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 30,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-metro-station-uttam-nagar-delhi-82197",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82194",
        name: "Firangi Bake",
        cloudinaryImageId: "gixgtdwczvscmswjrzrc",
        locality: "Rama Park Road",
        areaName: "Uttam Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "82194",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "3952",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        sla: {
          deliveryTime: 35,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/firangi-bake-rama-park-road-uttam-nagar-delhi-82194",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "82195",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
        locality: "Rama Park Road",
        areaName: "Uttam Nagar",
        costForTwo: "₹450 for two",
        cuisines: [
          "Snacks",
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "82195",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "4444",
        "avgRatingString": "4.2",
        "totalRatingsString": "500+",
        sla: {
          deliveryTime: 31,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-rama-park-road-uttam-nagar-delhi-82195",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "369480",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Mohan gardan",
        areaName: "Uttam Nagar",
        costForTwo: "₹250 for two",
        cuisines: [
          "Desserts",
          "Ice Cream"
        ],
        avgRating: 4.1,
        "veg": true,
        feeDetails: {
          restaurantId: "369480",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4200
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4200
        },
        "parentId": "5588",
        "avgRatingString": "4.1",
        "totalRatingsString": "50+",
        sla: {
          deliveryTime: 31,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-mohan-gardan-uttam-nagar-delhi-369480",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "218492",
        name: "Nathu's Sweets",
        cloudinaryImageId: "nubfhu2hldb6wmhnscft",
        locality: "Sector 13",
        areaName: "Dwarka",
        costForTwo: "₹200 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "South Indian",
          "Chaat",
          "Snacks",
          "Desserts"
        ],
        avgRating: 4,
        "veg": true,
        feeDetails: {
          restaurantId: "218492",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 5400
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5400
        },
        "parentId": "1945",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 28,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
          "secondaryDiscountCallout": "+ EXTRA ₹75 OFF"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nathus-sweets-sector-13-dwarka-delhi-218492",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "323163",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Vegas Mall",
        areaName: "Dwarka",
        costForTwo: "₹400 for two",
        cuisines: [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "323163",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 5300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5300
        },
        "parentId": "547",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-vegas-mall-dwarka-delhi-323163",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "251743",
        name: "Keventers - Milkshakes & Desserts",
        cloudinaryImageId: "f0e94c984813053f46c214f18ce73d59",
        locality: "Sector 14",
        areaName: "Dwarka",
        costForTwo: "₹200 for two",
        cuisines: [
          "Beverages",
          "Ice Cream",
          "Desserts",
          "Healthy Food"
        ],
        avgRating: 3.9,
        "veg": true,
        feeDetails: {
          restaurantId: "251743",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 4800
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4800
        },
        "parentId": "268997",
        "avgRatingString": "3.9",
        "totalRatingsString": "500+",
        sla: {
          deliveryTime: 27,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-sector-14-dwarka-delhi-251743",
        "type": "WEBLINK"
      }
    },
    {
      info: {
        id: "302690",
        name: "Barbeque Nation",
        cloudinaryImageId: "cm7yhjpqotb1zb3ozjkz",
        locality: "Dwarka",
        areaName: "Dwarka",
        costForTwo: "₹600 for two",
        cuisines: [
          "North Indian",
          "Barbecue",
          "Biryani",
          "Kebabs",
          "Mughlai",
          "Desserts"
        ],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "302690",
          "fees": [
            {
              name: "BASE_DISTANCE",
              "fee": 5300
            },
            {
              name: "BASE_TIME"
            },
            {
              name: "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 5300
        },
        "parentId": "2438",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        sla: {
          deliveryTime: 37,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "37 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 16:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barbeque-nation-dwarka-delhi-302690",
        "type": "WEBLINK"
      }
    }
  ]

const Body =()=>{
    return (
        <div className="body">
            <div className="search-box">Search</div>
            <div className="restarant-box">
                 {/* <RestaurantCards resData={restList[0]}/> not a good way give array indexing */}

                 {
                   restList.map(resturant => (
                   <RestaurantCards key={resturant.info.id} resData= {resturant}/>)) 
                 }
            </div>
        </div>
    )
}

const AppLayout= () =>{
return (
    <div className="App">
        <Header />
        <Body />
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);