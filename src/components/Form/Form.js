import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props) {
        console.log("gimmeTheProp", props)
        super(props);
        this.state = {
            name: '', 
            date: '', 
            time: '', 
            number: '',
        }
   
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitReservation = event => {
        event.preventDefault();
        const newReservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addNewReservation(newReservation);
    }

    render() {
        return (
        <div className="form-container">
            <input
                id="nameInput"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
            /> 
            <input
                id="dateInput"
                type="text"
                name="date"
                placeholder="Date (mm/dd)"
                value={this.state.date}
                onChange={event => this.handleChange(event)}
            /> 
             <input
                id="timeInput"
                type="text"
                name="time"
                placeholder="Time"
                value={this.state.time}
                onChange={event => this.handleChange(event)}
            /> 
            <input
                id="numberInput"
                type="text"
                name="number"
                placeholder="Number of guests"
                value={this.state.number}
                onChange={event => this.handleChange(event)}
            /> 
        <button id="submitBtn" className="submit-button" onClick={event => this.submitReservation(event)}>Make Reservation</button>
        </div>
        )
    }







}


export default Form;