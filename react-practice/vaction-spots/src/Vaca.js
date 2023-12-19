import { useState } from 'react'
let pricetag 


function Vaca (props){
    if (props.spots.price < 500){
        pricetag = "$"
    } else if (props.spots.price > 500 & props.spots.price < 1000){
        pricetag = "$$"
    } else pricetag = "$$$"
        
    
    
    return(
        <div className="vaca">
            <p>{pricetag}</p>
            <h1>{props.spots.place}</h1>
            <h3>Price:${props.spots.price}</h3>
            <h4>Best time to visit: {props.spots.timeToGo}</h4>
        </div>
    )
}

export default Vaca