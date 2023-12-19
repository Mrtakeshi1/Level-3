import { useState } from 'react'
import vacationSpots from './Data'
import Vaca from './Vaca'

const spring = {
    backgroundColor: "blue"
}
const winter = {
    backgroundColor: "red"
}

const fall = {
    backgroundColor: "green"
}

const summer = {
    backgroundColor: "yellow"
}

function Cards (){
    let card = vacationSpots.map(spots => {
        
        return(
            <Vaca
            spots = {spots}
            />
        )
        
    })

    return(
        <div className='card-container'>
            <span style={spring}>{card}</span>
            <span style={winter}>{card}</span>
            <span style={fall}>{card}</span>
            <span style={summer}>{card}</span>
        </div>
    )
}




export default Cards