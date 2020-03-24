
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'
import JournalList from './JournalList'
import AddJournal from './AddJournal'
import { Link } from 'react-router-dom';

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

            <AddJournal kid={this.props.location.state.clickedjournal}/>

        {this.props.location.state.clickedjournal.journals.map(journal => < JournalList journal={journal} />)}
        <button id="course-button-back" className="btn"><Link to="/profile">Back</Link></button>
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
