import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Baby_images from './Baby_images';

class Baby_Card extends Component {



    render() {
        return (
            <div>
              
<div className="s_cat_div">
    <h1 className="sub_cats"> {this.props.sub.sub_title}</h1>
    </div>
    <div className="row">
    {this.props.sub.courses.map(course => < Baby_images course={course}/>)}
             </div>
            </div>
                
        );
    }
  }

  
export default Baby_Card;


