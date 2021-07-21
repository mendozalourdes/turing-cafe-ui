import React, { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls';
import AllReservations from '../AllReservations/AllReservations';


class App extends Component {
  constructor() {
    super();
    this.state = {
      error: '', 
      reservations: []
    }
  }

  componentDidMount() {
    apiCalls.fetchAPIData('/reservations')
      .then(response => {
        if(typeof response === 'string') {
          this.setState({error: response})
        } else {
          this.setState({reservations: response})
        }
      })
      .catch(err => err.message)
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <AllReservations allReservations={this.state.reservations}/>
          
        </div>
      </div>
    )
  }
}

export default App;
