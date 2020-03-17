import React, { Component } from 'react';


class CourseInfo extends Component {



    render() {
        console.log(this.props.clickedcourse)
        return (
            <div>

              <div className="column">
                   <h1>{this.props.clickedcourse.title}</h1>
                   <h4><i>{this.props.clickedcourse.quote}</i></h4>
                   <p>{this.props.clickedcourse.content}</p>
                   <button className="btn btn-secondary btn-lg" onClick={() => this.props.handleBackButton()}>Back</button>
             </div>
             
            </div>
                
        );
    }
  }

  
export default CourseInfo;


