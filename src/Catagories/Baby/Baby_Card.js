import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Baby_images from './Baby_images';

class Baby_Card extends Component {
        state = {
             clickedcourse: null
            }

     handleCourseClick = (course) => {
        this.setState({
              clickedcourse: course
         })
     }

      handleBackButton = () => {
          this.setState({
             clickedcourse: null
         })
    }


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



//   return (

//       <div>

// <div className='card-container'></div>
//       {this.state.clickedcourse ?  <ItemInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton}/> : <Baby_Card course={this.props.course} handleItemClick={this.handleItemClick}/>}
//        </div>                                                                                                                      this.props.characters.map(char => <Baby_Card key={char.char_id} char={char}                   
// </div>
//   )
// }
// }