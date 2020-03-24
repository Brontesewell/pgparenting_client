
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'


class JournalsPage extends Component {

    
    render() {
        

        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>
              <h1>hello</h1>
        <h1>{this.props.location.state.clickedjournal.name}</h1>
        <button id="course-button-back" className="btn" onClick={() => this.history.push('/profile')}>Back</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedKid: state.selectedKid,
        kids: state.kids,
        currentUser: state.currentUser,
    }
}


export default connect(mapStateToProps, null)(JournalsPage);
