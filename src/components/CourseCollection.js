import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import findAndDestroyCollection from '../actions/findAndDestroyCollection'


class CourseCollection extends Component {

render() {
    const {history, currentUser} = this.props
    const collection = {user_id: currentUser.id, course_id: this.props.course.id}
    console.log(collection)
    return (
        <div>
<h5>{this.props.course.title}</h5>
<br/><button className="btn" type="submit" onClick={(e) => findAndDestroyCollection(e, history, collection)}>Delete Course</button>
</div>
    );
}
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        findAndDestroyCollection: (e, history, collection) => dispatch(findAndDestroyCollection(e, history, collection))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(CourseCollection);














