import React from 'react';
import './OneReservation.css'

const OneReservation = ({id, name, date, time, number, cancelReservation}) => {
    return (
        <div className="each-reservation">
            <h2 className="client-name">{name}</h2>
            <p className="date">{date}</p>
            <p className="time">{time}pm</p>
            <p className="number">Number of guests: {number}</p>
            <button id="cancelBtn">Cancel</button>
            {/* <button onClick={event => this.cancelReservation(event)}> Cancel</button> */}
        </div>

    )



}


export default OneReservation;

