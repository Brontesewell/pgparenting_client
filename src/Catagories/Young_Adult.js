import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Young_Adult extends Component {

state = {
    young_adult: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/11', {
          method: "GET",
          headers: {
            "Authorization": `${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json',
              "Accept": "application/json"
          }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
             this.setState({
                young_adult: data
             }) 
      })
}
    render() {

        
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>young_adult</strong></h1>
             {/* <h1>{this.state.young_adult.courses.map(co => console.log(co))}</h1>  */}
             {/* render a new component and try there */}
            </div>
                
        );
    }
  }
export default Young_Adult;

