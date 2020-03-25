
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import deleteJournal from '../actions/deleteJournal'


class JournalList extends Component {

    
    render() {
      

        return (
            <div>
                
              <div id="journal-buble">
              <h1 id="journal-text">{this.props.journal.text}</h1>
                <h5 id="created-j"><i>Created at {this.props.journal.date_now}</i></h5>
                {/* <br/><button className="waves-effect waves btn pink accent-3" type="submit" onClick={(e) =>deleteJournal(e, journal, history)}>Delete Your Journal</button> */}
              </div> 
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



const mapsToDispatchProps = dispatch => {
  return {
      deleteJournal: (e, journal, history) => dispatch(deleteJournal(e, journal, history)),
  }
}



export default connect(mapStateToProps, mapsToDispatchProps)(JournalList);
