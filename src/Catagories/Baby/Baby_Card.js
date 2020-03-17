import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Baby_images from './Baby_images';
import CourseInfo from './CourseInfo'

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
    
    {/* {this.props.sub.courses.map(course => < Baby_images course={course}/>)} */}
     <div className='card-container'>
     {this.state.clickedcourse ?  <CourseInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton}/> : this.props.sub.courses.map(course => <div className="row"> < Baby_images course={course} handleCourseClick={this.handleCourseClick}/> </div>)}
        </div>              

            
            </div>
                
        );
    }
  }

  
export default Baby_Card;



//   return (

//       <div>

// <div className='card-container'></div>
//       {this.state.clickedcourse ?  <CourseInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton}/> :   {this.props.sub.courses.map(course => < Baby_images course={course} handleItemClick={this.handleItemClick}/>)}
//        </div>              
// </div>
//   )
// }
// }