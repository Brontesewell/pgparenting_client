import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Primary_school extends Component {

state = {
    primary_school: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/4', {
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
                primary_school: data
             }) 
      })
}
    render() {
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>primary school</strong></h1>
        
             
            </div>
                
        );
    }
  }
export default Primary_school;

