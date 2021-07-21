import React from 'react';

const OneReservation = ({id, name, date, time, number}) => {
    return (
        <div className="each-reservation">
            <h2 className="client-name">{name}</h2>
            <p className="date">{date}</p>
            <p className="time">{time}</p>
            <p className="number">{number}</p>

        </div>

    )



}


export default OneReservation;


// id={reservation.id}
// name={reservation.name}
// date={reservation.date}
// time={reservation.time}
// number={reservation.number}
// key={reservation.id}