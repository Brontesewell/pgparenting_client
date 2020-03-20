import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Children extends Component {

render() {
    return (
        <div>
            <div id="child-name"><h5>{this.props.kid.name}</h5></div>
            <div id="child-info"><h6 className="child-gender-bday">Gender: {this.props.kid.gender}</h6><h6 className="child-gender-bday">Birthday: {this.props.kid.birthday}</h6></div>

            <div id="child-edit-b"> <Link to='/edit-kid' onClick={() => this.props.selectedKid(this.props.kid)}><button id="edit-child-button" className="btn">Edit Child</button></Link></div>
            
</div>
    );
}
}

const mapsToDispatchProps = dispatch =>{
    return{
        selectedKid: (kid) => dispatch({type: 'SET_SELECTED_KID', kid: kid}),
        }
}
export default connect(null, mapsToDispatchProps)(Children);















