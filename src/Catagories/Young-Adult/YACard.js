import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import YAImages from './YAImages';
import YACourseInfo from './YACourseInfo'
import { Route, Switch, Redirect } from 'react-router-dom'

class Card extends Component {
        state = {
             clickedcourse: null,
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
    
    </div>
    <h1 className="sub_cats"> {this.props.sub.sub_title}</h1>
    {/* {this.props.sub.courses.map(course => < Images course={course}/>)} */}
     <div className='card-container' >
     {this.state.clickedcourse ?  
     <Switch>
           <Redirect to={{
                pathname: `/young_adults/${this.state.clickedcourse.id}`,
                state: { clickedcourse: this.state.clickedcourse.id, clickedcourse: this.state.clickedcourse}
            }} />
            <Route path={`/young_adults/${this.state.clickedcourse.id}`} >
                <YACourseInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton} />
            </Route>
      </Switch>
     : 
     
     this.props.sub.courses.map(course => <div id="all-courses"> < YAImages sub={this.props.sub} course={course} handleCourseClick={this.handleCourseClick}/> </div>)}
       
        </div>              
        {/* <Route exact path="/course" render={(routerProps) => <CourseInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton}/>}/> */}
            
            </div>
                
        );
    }
  }

  
export default Card;



//   return (

//       <div>

// <div className='card-container'></div>
//       {this.state.clickedcourse ?  <CourseInfo clickedcourse={this.state.clickedcourse} handleBackButton={this.handleBackButton}/> :   {this.props.sub.courses.map(course => < Images course={course} handleItemClick={this.handleItemClick}/>)}
//        </div>              
// </div>
//   )
// }
// }