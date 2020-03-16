import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'


class Toddler extends Component {

state = {
  toddler: ''
}


// componentDidMount (){
//       return fetch('http://localhost:3000/catagories/2', {
//           method: "GET",
//           headers: {
//             "Authorization": `${localStorage.getItem('jwt')}`,
//             'Content-Type': 'application/json',
//               "Accept": "application/json"
//           }
//       })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//              this.setState({
//                 toddler: data
//              }) 
//       })
// }
    render() {
      console.log(this.props.toddler)
        return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Toddler (1 - 2 yrs old)</h1>
        <div className="line-catagory"></div>
        
             
            </div>
                
        );
    }
  }
export default Toddler;

