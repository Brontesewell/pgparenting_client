import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Preteen extends Component {

state = {
    preteen: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/5', {
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
                preteen: data
             }) 
      })
}
    render() {
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>preteen</strong></h1>
        
             
            </div>
                
        );
    }
  }
export default Preteen;

