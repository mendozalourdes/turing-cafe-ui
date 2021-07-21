import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super();
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

    render() {
        return (
        <div className="form-container">
            <input
                type="text"
                className="name"
                placeholder="Name"
                value={this.state.name}
                onChange={event => this.handleChange(event)}
            /> 
        </div>
        )
    }







}


export default Form;