import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import fetchAllCatagories from '../actions/fetchAllCatagories';
import Young_Adult_Container from './Young_Adult_Container';

class Baby_Container extends Component {



    render() {
      console.log(this.props.baby)
      

        return (
            <div>
              <div><Navbar/></div>
              <h1 className="Catagory">Baby (0 - 12 mo)</h1>
        <div className="line-catagory"></div>
       
       
       

       {/* SWITCH STATEMENT OR THREE COMPONENTS EACH */}
        
             
            </div>
                
        );
    }
  }

  
export default Baby_Container;


