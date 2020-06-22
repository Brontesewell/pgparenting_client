import React, { Component } from 'react';
import {connect} from 'react-redux'
import addToCollection from '../../actions/addToCollection'
import Navbar from '../../containers/Navbar'

class CourseInfo extends Component {

  state = {
    course_id: this.props.location.state.clickedcourse.id,
    user_id: this.props.currentUser.id,
    course: this.props.location.state.clickedcourse
}


    render() {
        
        const {course_id, user_id} = this.state
        const {history} = this.props
        return (
            <div>
             
                    {/* <Navbar /> */}
                
              <div id="course-info">
                   <h1 id="course-title">{this.state.course.title}</h1>
                   <button id="course-favs-button" className="btn" onClick={(e) => this.props.addToCollection(e, this.state, history)}>Add To Favourites</button>
                   <div id="course-quote-div"><h5><i>"{this.state.course.quote}"</i></h5></div>
                   <br></br>
                   
               <div id="image-and-content">
                   <div>
                   <img id="course-image" src={this.state.course.course_image}/>
                   </div>

                   <div>
                   <p id="course-content">{this.state.course.content}</p>
                   </div>
               </div>

                   <br></br>
                   <br></br>
                   <button id="course-button-back" className="btn" onClick={() => history.push('/baby')}>Back</button>
             </div>
             
            </div>
                
        );
    }
  }

  const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

const mapsToDispatchProps = dispatch => {
  return {
      addToCollection: (e, history, state) => dispatch(addToCollection(e, history, state)),
  }
}

export default connect(mapStateToProps, mapsToDispatchProps)(CourseInfo);

