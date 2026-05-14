/* ------------ This is imported file which is exported form ./propert folder -------------*/
import { propertyForSaleArr } from "./property/propertySaleToBeExportedArray.js";

/* --------------------- fetching HTML div ID --------------------------- */
const container = document.getElementById("property-container");

/* -------------------------- Object Destructuring ---------------------------- */
const {propertyLocation, price, roomsM2, comments, image} = propertyForSaleArr

/* --------------------- Rendering all properties using .map function -------------------- */
function fetchProperty(propertyForSaleArr){
    return propertyForSaleArr.map((property) => {
        const totalArea = property.roomsM2.reduce((accSum, defaultValue) => {
            return accSum + defaultValue
        })
       return `<img src=${property.image}>
            <div class="card-right">
            <h2 class="property-location">${property.propertyLocation}</h2>
            <h3 class="property-price"> Rs: ${property.price}</h3>
            <p class="property-description"> <b>Description:</b> ${property.comments}</p>
            <h3 class="property-area"> Total Area: ${totalArea} m<sup>2</sup></h3>
            </div>`
})}

/* --------------------- rendering function code HTML -------------------- */
container.innerHTML = fetchProperty(propertyForSaleArr)