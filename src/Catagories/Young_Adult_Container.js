import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'

class Young_Adult_Container extends Component {

    render() {

        console.log(this.props.young_adult)
        return (
            <div>
              <div><Navbar/></div>
              <h1><strong>young_adult</strong></h1>
             <h1>{this.props.young_adult.catagory_title}</h1> 
             {/* render a new component and try there */}

            </div>
                
        );
    }
  }
export default Young_Adult_Container;

