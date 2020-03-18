import React, { Component } from 'react';


class CourseInfo extends Component {



    render() {
        console.log(this.props.clickedcourse)
        return (
            <div>

              <div >
                   <h1>{this.props.clickedcourse.title}</h1>
                   <h4><i>{this.props.clickedcourse.quote}</i></h4>
                   <br></br>
                   <img id="course-image" src={this.props.clickedcourse.course_image}/>
                   <p id="course-content">{this.props.clickedcourse.content}</p>
                   <br></br>
                   <br></br>
                   <button className="btn btn-secondary btn-lg" onClick={() => this.props.handleBackButton()}>Back</button>
             </div>
             
            </div>
                
        );
    }
  }

  
export default CourseInfo;


