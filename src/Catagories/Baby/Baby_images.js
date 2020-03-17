import React, { Component } from 'react';


class Baby_images extends Component {



    render() {
        return (
            <div>

            <div className="column" onClick={() => this.props.handleCourseClick(this.props.course)}>
            <img className="images" src={this.props.course.course_image}/>
            <h5>{this.props.course.title}</h5>
           </div>
             
            </div>
                
        );
    }
  }

  
export default Baby_images;


