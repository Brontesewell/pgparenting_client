import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import Young_Adult_Container from './Young_Adult_Container'

class Young_Adult extends Component {

state = {
    young_adult: '',
    young_adults_courses: '',
    young_adults_cats: ''
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
      
         this.setState({
                young_adult: data
             }) 
      data.courses.map(c => {this.setState({
        young_adults_courses: c
      })})
      data.sub_catagories.map(sc => {this.setState({
        young_adults_cats: sc
      })})
          
      })
}
    render() {

        // console.log(this.state.young_adults_courses)
       
      return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Young Adult (19 - 25 yrs old)</h1>
                 <div className="line-catagory"></div>
             <Young_Adult_Container young_adult={this.state.young_adult} young_adults_courses={this.state.young_adults_courses}  young_adults_cats={this.state.young_adults_cats}/>
            </div>
                
        );
    }
  }
export default Young_Adult;

