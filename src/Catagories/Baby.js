import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Baby extends Component {

state = {
  baby: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/1', {
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
               baby: data
             }) 
      })
}
    render() {
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>Baby</strong></h1>
        
             
            </div>
                
        );
    }
  }
export default Baby;

