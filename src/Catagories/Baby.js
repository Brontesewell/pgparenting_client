import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'


class Baby extends Component {


  
    
    
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

