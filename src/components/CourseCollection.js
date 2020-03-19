import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class CourseCollection extends Component {

render() {
    return (
<h5>{this.props.course.title}</h5>
    );
}
}
export default CourseCollection;















