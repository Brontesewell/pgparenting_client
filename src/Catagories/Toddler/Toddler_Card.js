import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Toddler_images from './Toddler_images';

class Toddler_Card extends Component {



    render() {
        return (
            <div>
            
<div className="s_cat_div">
    <h1 className="sub_cats"> {this.props.sub.sub_title}</h1>
    </div>
    <div className="row">
    {this.props.sub.courses.map(course => < Toddler_images course={course}/>)}
             </div>
            </div>
                
        );
    }
  }

  
export default Toddler_Card;


