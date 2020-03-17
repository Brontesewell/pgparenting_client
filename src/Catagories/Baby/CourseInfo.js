import React, { Component } from 'react';


class CourseInfo extends Component {



    render() {
        console.log(this.props.clickeditem)
        return (
            <div>

            <div className="column">
            <h1>Hello</h1>
            <button className="btn btn-secondary btn-lg" onClick={() => this.props.handleBackButton()}>Back</button>
           </div>
             
            </div>
                
        );
    }
  }

  
export default CourseInfo;


