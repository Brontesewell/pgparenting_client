import React, { Component } from 'react';
import {connect} from 'react-redux'
import addToCollection from '../../actions/addToCollection'

class CourseInfo extends Component {

  state = {
    course_id: this.props.clickedcourse.id,
    user_id: this.props.currentUser.id
}


    render() {
        console.log(this.props.clickedcourse)
        const {course_id, user_id} = this.state
        const {history} = this.props
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
                   <button className="btn btn-secondary btn-lg" onClick={(e) => this.props.addToCollection(e, this.state, history)}>Add To Favourites</button>
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

