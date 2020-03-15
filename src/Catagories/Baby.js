import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories'


class Baby extends Component {

    state = {
        catagories: this.props.catagories,
        // catagory: {}
    }

  
    
    
    render() {
           console.log(this.state.catagories)
        return (
            <div>
              <div><Navbar/></div>

            {this.state.catagories.map(cat => console.log(cat)) }
         
              
              <h1><strong>Baby</strong></h1>
        

            </div>
                
        );
    }
}

  
export default Baby;

