import React from 'react';
import './AllReservations.css'

// import OneReservation


const AllReservations = ({allReservations}) => {
    const reservationCards = allReservations.map(reservation => {
        return (
            <OneReservation 
                id={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                key={reservation.id}
            />
        )
    })

    return (
        <div className="reservations-container">
            {reservationCards}
        </div>
    )

}



export default AllReservations;