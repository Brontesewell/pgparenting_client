import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Pre_school extends Component {

state = {
    pre_school: ''
}


componentDidMount (){
      return fetch('http://localhost:3000/catagories/3', {
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
               pre_school: data
             }) 
      })
}
    render() {
        return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Pre-School (3 - 5 yrs old)</h1>
        <div className="line-catagory"></div>
        
             
            </div>
                
        );
    }
  }
export default Pre_school;

