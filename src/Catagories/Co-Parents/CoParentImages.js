import React, { Component } from 'react';


class Images extends Component {



    render() {
          
        return (
            <div>
                {/* <h1 className="sub_cats"> {this.props.sub.sub_title}</h1> */}
            <div className="column" onClick={() => this.props.handleCourseClick(this.props.course)}>
            <img className="images" src={this.props.course.course_image}/>
            <h5 id="title-image-course">{this.props.course.title}</h5>
           </div>
             
            </div>
                
        );
    }
  }

  
export default Images;


