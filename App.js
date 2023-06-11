import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <div className="headerComponent">
    <img alt="Food Logo" className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDNTY6wmwDrFTGfZ0lKb_C7i-SDiQjvM6PuQY_mdX-kEwVz8RvlIZy2hlPVTmoJWt6TU&usqp=CAU"/>
    <ul className="nav-items">
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Products</li>
      <li>Cart</li>
    </ul>
  </div>
);

const resList = [{
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "630531",
        "name": "Magic Pizza\t",
        "uuid": "e843657a-9418-4665-baff-87e1b3d1e196",
        "city": "5",
        "area": "Powai",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "cwr6qjbslbdmwbdgf7ki",
        "cuisines": [
          "Pizzas",
          "Desserts",
          "Pastas"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 51,
        "minDeliveryTime": 51,
        "maxDeliveryTime": 51,
        "slaString": "51 MINS",
        "lastMileTravel": 9.399999618530273,
        "slugs": {
          "restaurant": "magic-pizza-powai-powai",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "Room No. 2/A, First Floor, Ekta Nagar, IIT Market Signal, Opp. IIT Post Office, Powai, Mumbai - 400076 ,Powai Lake,Greater Mumbai Ward-S,Greater Mumbai,Maharashtra-400076",
        "locality": "Ekta Nagar",
        "parentId": 129360,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 11200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 11200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "11200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6895802~p=1~eid=00000188-a711-2c84-1099-0f9200bf0123",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "9.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "630531",
          "deliveryTime": 51,
          "minDeliveryTime": 51,
          "maxDeliveryTime": 51,
          "lastMileTravel": 9.399999618530273,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "78036",
        "name": "Burger King",
        "uuid": "c04163ad-ab93-4fce-81da-e87d4f2687b0",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "burger-king-cst-road-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "unit no G2, Ground floor , Central Plaza , 166,CST Road, Kalina, Mumbai 400098",
        "locality": "Central Plaza, Kalina",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "78036",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "82668",
        "name": "The Belgian Waffle Co.",
        "uuid": "81a57548-8c03-4f5d-95e0-4f32a060fa60",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "gwfdgqjf5oymhegcvhvn",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "the-belgian-waffle-co-kalina-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "No. 5, SUMIT ARTISTA, opp. AUDI SERVICE CENTER, Near BKC, KALINA, SANTACRUZ (E)Greater Mumbai, Maharashtra, 400059",
        "locality": "Kalina",
        "parentId": 2233,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "82668",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "490175",
        "name": "It's Cheeky",
        "uuid": "c2fc4939-b9dd-49b7-a4fe-138a53c64d12",
        "city": "5",
        "area": "Bandra West",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "rhrcwlxmnmftsyntik3v",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Snacks",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 6.599999904632568,
        "slugs": {
          "restaurant": "it’s-cheeky-bandra-west-bandra-west",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "Shop No 2, Satguru Shopping Center, 3rd Road Khar West, 400052",
        "locality": "Khar West",
        "parentId": 366548,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 8200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 8200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "8200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7014001~p=4~eid=00000188-a711-2c84-1099-0f9300bf0416",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "490175",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 6.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "81270",
        "name": "Shawarma's & More",
        "uuid": "ca5768b3-e468-47f3-9f09-8c45a0d082e9",
        "city": "5",
        "area": "Kalina",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "uviqipqfbvkezsdm8h0s",
        "cuisines": [
          "Lebanese",
          "Tandoor",
          "Pizzas",
          "Pastas",
          "Arabian",
          "Tibetan",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "shwarmas-more-jama-masjid-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHAWARMA'S & MORE kalina, Jama Masjid Ln, opp. crescent tower, Vidya Nagari, Kalina, santacruz (e), Mumbai, Maharashtra 400098",
        "locality": "Jama Masjid",
        "parentId": 182518,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹700",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "81270",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "42885",
        "name": "Rolls Mania",
        "uuid": "c4bf774b-e822-4264-bd3d-4f4a7dea24dd",
        "city": "5",
        "area": "Santacruz East",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "g7donnzr1ev21elpr3nf",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "rolls-mania-evershine-nagar-malad-kan-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "B-7, Sumit Artista, CST Road, Near Kalina university, Kalina, Santacruz East, Mumbai 400098.",
        "locality": "Santacruz East",
        "parentId": 171118,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "42885",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "608883",
        "name": "Hundo Pizza",
        "uuid": "bfb09820-5428-4414-acf6-5e9bae5ec1c1",
        "city": "5",
        "area": "Powai",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "dea7176700bf872747979478dad18025",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 120000,
        "costForTwoString": "₹1200 FOR TWO",
        "deliveryTime": 52,
        "minDeliveryTime": 52,
        "maxDeliveryTime": 52,
        "slaString": "52 MINS",
        "lastMileTravel": 7.599999904632568,
        "slugs": {
          "restaurant": "hundo-pizza-powai-powai",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "HUNDO PIZZA Shop No. AA52 Kailash Vaibhav , near MALINI,S  health kitchen , Kailash Industrial Complex, HMPL Surya Nagar, Vikhroli West, Mumbai, Maharashtra 400079",
        "locality": "",
        "parentId": 104088,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 9200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 9200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "9200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7029641~p=7~eid=00000188-a711-2c84-1099-0f9400bf075a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "608883",
          "deliveryTime": 52,
          "minDeliveryTime": 52,
          "maxDeliveryTime": 52,
          "lastMileTravel": 7.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "535962",
        "name": "SLYCE",
        "uuid": "5e001515-c50f-4ee2-ae8b-ef5798ce5fd7",
        "city": "5",
        "area": "Bandra Kurla Complex",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "4c899e0501bef7e4c6acd1fa7cc2c82b",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "slyce-bandra-kurla-complex-malad-kan-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "Unit G 4, Ground Floor, Trade Center Building, Bandra Kurla Complex, Mumbai",
        "locality": "Trade Center Building",
        "parentId": 321813,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "535962",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "391816",
        "name": "Louis Burger",
        "uuid": "1319ca4c-17c3-4741-ab37-ceb376f54b05",
        "city": "5",
        "area": "Santacruz Bandra east",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "louis-burger-trade-centre-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "Star Awas, G4-A, Ground Floor, Trade Centre, Bandra East, Mumbai, Maharashtra 400051",
        "locality": "Trade Centre",
        "parentId": 22485,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "391816",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "433043",
        "name": "OD Pizza",
        "uuid": "fb799ff3-0cd0-462d-a945-1cd338a405e9",
        "city": "5",
        "area": "Santacruz West",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "f2ljqcy2qrv994wtjolu",
        "cuisines": [
          "Italian",
          "Fast Food",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 6.900000095367432,
        "slugs": {
          "restaurant": "od-pizza-bandra-west-bandra-west",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHOP NO.1,  GROUND FLOOR,  AHIYA BUILDING,  16TH ROAD,  SANTACRUZ WEST,  Greater Mumbai  Ward-H/W, Greater  Mumbai,  Maharashtra-400054",
        "locality": "Borgan Chawl",
        "parentId": 261153,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 8200,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 8200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "8200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7087054~p=10~eid=00000188-a711-2c84-1099-0f9500bf0a7e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "433043",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 6.900000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "453784",
        "name": "House of Shawarma's & More",
        "uuid": "7bacc440-5208-4bba-b69b-a8036dcbf87a",
        "city": "5",
        "area": "Scruz Bandra East",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "oyftkbt5h1hp5s1zbcl4",
        "cuisines": [
          "Lebanese",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "house-of-shawarma's-&-more-scruz-bandra-east-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHOP NO 3 NEXT TO SEWA MEDICAL KALINA JAMA MASJID LANE OPP CRESCENT TOWER SANTACRUZ E MUMBAI 400098, Kalina Gaon, Greater Mumbai Ward-H/E, Greater Mumbai, Maharashtra - 400098",
        "locality": "Kalina Gaon",
        "parentId": 272946,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "453784",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "117397",
        "name": "La Pino'z Pizza",
        "uuid": "a001f0a1-4227-49e8-89c5-4ee653cc59e6",
        "city": "5",
        "area": "Sion",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "pft1dcdx8udfepmcnuty",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 55000,
        "costForTwoString": "₹550 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 4.099999904632568,
        "slugs": {
          "restaurant": "la-pinoz-pizza-sion-sion-bhakti-park",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "La Pino'z Pizza, 8/A - 1, Sindhi Colony, Road No. 24, Sion, Mumbai",
        "locality": "Sindhi Colony",
        "parentId": 4961,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "117397",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 4.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "337609",
        "name": "Nino Burgers",
        "uuid": "6d299a2c-d0d1-4980-a8da-5bd1978f1396",
        "city": "5",
        "area": "Bandra West",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "30106f914823aba42609d5be4e246fee",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 6.199999809265137,
        "slugs": {
          "restaurant": "nino-burgers-bandra-west-bandra-west",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHOP NO.7,GR 1ST FLOOR DARVESH GRAND,4TH ROAD,SUJAN CHADHA ROAD,KHAR WEST, Greater Mumbai Ward-H/ W, Greater Mumbai, Maharashtra-400052",
        "locality": "Bandra West",
        "parentId": 12333,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 5900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7022678~p=13~eid=00000188-a711-2c84-1099-0f9600bf0d74",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "337609",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 6.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "698272",
        "name": "Maiz Mexican Kitchen",
        "uuid": "af97c998-0199-48ab-8d24-2122cd4c2e36",
        "city": "5",
        "area": "BKC",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "8fb434032fdce4f38d98fef761589c25",
        "cuisines": [
          "Mexican",
          "Italian",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.399999976158142,
        "slugs": {
          "restaurant": "maiz-mexican-kitchen-bandra-west-bandra-west",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "OFFICE NO. 10, SWASTIK INDUSTRIAL ESTATE, VIDYANAGARI MARG, KALINA CST ROAD, SANTACRUZ EAST MUMBAI , Greater Mumbai Ward-H/E, Greater Mumbai, Maharashtra-400098",
        "locality": "Kalina Cst Road",
        "parentId": 11654,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "698272",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.399999976158142,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "594620",
        "name": "BK Cafe",
        "uuid": "a2ff7dc1-e26c-42be-892b-919e5266c5eb",
        "city": "5",
        "area": "Kalina",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "d0fsshyrc1b49kd5cska",
        "cuisines": [
          "American",
          "Cafe"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "bk-cafe-central-plaza-kalina-scruz-bandra-east",
          "city": "mumbai"
        },
        "cityState": "5",
        "address": "unit no G2, Ground floor , Central Plaza , 166,CST Road, Kalina, Mumbai 400098",
        "locality": "Central Plaza",
        "parentId": 337525,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "594620",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
}];
const RestaurantCard = (props) =>{

  const {resData} = props;
  return(
  <div className="restaurant-card">
    <img className="resLogo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resData.data.cloudinaryImageId} />
    <div className="card-content">
      <h3 className="resName">{resData.data.name}</h3>
      <h4 className="Cuisine">{resData.data.cuisines.join(",")}</h4>
      <h5 className="rating">{resData.data.avgRating} stars</h5>
      <h6 className="cost-for-two">{resData.data.costForTwo/100}</h6>
      <h6 className="time-to-deliver">{resData.data.deliveryTime}</h6>
    </div>
  </div>
);
};
const BodyComponent = () => (
  <div className="bodyComponent">
    <div className="res-container">
      {resList.map((restaurant)=>
       (
       <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
       )
      )}
    </div>
  </div>
);

const Footer = () => (
<div className="footerComponent">
<footer> <small>Copyright © 2023 Food Company . All Rights Reserved.</small></footer>
</div>
)

const AppLayout = () => (
  <><Header/>
<BodyComponent/>
<Footer/>
</>
);

root.render(<AppLayout/>
);
