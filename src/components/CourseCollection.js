import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import deleteCollection from '../actions/deleteCollection'


class CourseCollection extends Component {

render() {
    const {history, currentUser} = this.props
    const collection = {user_id: currentUser.id, course_id: this.props.course.id}
    const {id} = collection
console.log(this.props.course)


    return (
        <div>
            <div id="favs-box" style={{backgroundImage: `url(${this.props.course.course_image})`,  backgroundRepeat: 'no-repeat', backgroundPosition: "bottom", backgroundSize: "cover"}}>
                    <div id="bg-course-collect">
                    <h5 id="course-collect-titles">{this.props.course.title}</h5>
                <div id="bg-course-collect">
                    <br/><button id="delete-fav" className="btn" type="submit" onClick={(e) => this.props.deleteCollection(e, collection, history)}><Link onClick={() =>  window.location.href="/profile"} id="delete-course">Delete Course</Link></button>

                    <button id="delete-fav" className="btn" type="submit"><Link onClick={() =>  window.location.href=`/baby/${this.props.course.id}`} id="delete-course">View Course</Link></button>
                    </div>
            </div>
        </div>
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
        deleteCollection: (e, collection, history) => dispatch(deleteCollection(e, collection, history))

        // findAndDestroyCollection: (e, history, collection) => dispatch(findAndDestroyCollection(e, history, collection))
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(CourseCollection);














