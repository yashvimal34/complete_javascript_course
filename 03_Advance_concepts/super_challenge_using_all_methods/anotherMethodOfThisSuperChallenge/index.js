import { propertyForSaleArr } from "../property/propertySaleToBeExportedArray.js"
import { unknownProperty } from "../property/unknownPropertyArr.js"

const container = document.getElementById("label-container")

function fetchProperty (propertArr = unknownProperty) {
    return propertArr.map(property => {
        const {propertyLocation, price, roomsM2, comments, image} = property
        const totalArea = roomsM2.reduce((total, current) => total + current)
        return `
            <img src=${property.image}>
            <div class="card-right">
            <h2>${property.propertyLocation}</h2>
            <h3> Rs: ${property.price}</h3>
            <p> <b>Description:</b> ${property.comments}</p>
            <h3> Total Area: ${totalArea} m<sup>2</h3>
        `
    })
}
container.innerHTML = fetchProperty(propertyForSaleArr)