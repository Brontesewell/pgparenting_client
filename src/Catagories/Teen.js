import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Teen extends Component {

state = {
    teen: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/6', {
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
                teen: data
             }) 
      })
}
    render() {
        return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Teen (13 - 18 yrs old)</h1>
        <div className="line-catagory"></div>
        
             
            </div>
                
        );
    }
  }
export default Teen;

