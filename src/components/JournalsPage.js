
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'
import JournalList from './JournalList'

class JournalsPage extends Component {

    
    render() {
        console.log(this.props.location.state.clickedjournal.journals)

        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>
              <h1 id="title-journal">{this.props.location.state.clickedjournal.name}'s  Journals</h1>
              <div id="line-journal-title"></div>

        <h1>{this.props.location.state.clickedjournal.journals.map(journal => < JournalList journal={journal} />)}</h1>
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
