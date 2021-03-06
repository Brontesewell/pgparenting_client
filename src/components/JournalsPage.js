
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'
import JournalList from './JournalList'
import AddJournal from './AddJournal'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

class JournalsPage extends Component {



    handleBackClick = () => {
        this.props.clearSelectedJournals()
        this.props.history.push('/profile')

    }

    render() {


        return (
            <div>
               
                    {/* {<Navbar/>} */}
                
              <h1 id="title-journal">{this.props.selectedJournals.name}'s  Journals</h1>
              <div id="line-journal-title"></div>

            <AddJournal kid={this.props.selectedJournals}/>

        {this.props.selectedJournals.journals.map(journal => < JournalList journal={journal} />).reverse()}

        
        
        <button id="course-button-back" className="btn" onClick={() => this.handleBackClick()}>Back</button>

</div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedKid: state.selectedKid,
        kids: state.kids,
        currentUser: state.currentUser,
        journals: state.journals,
        selectedJournals :state.selectedJournals
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clearSelectedJournals: () => dispatch({ type: "CLEAR_SELECTED_JOURNALS" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JournalsPage);
