
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'


class JournalList extends Component {

    
    render() {
      

        return (
            <div>
                
              <div id="journal-buble">
              <h1 id="journal-text">{this.props.journal.text}</h1>
                <h5 id="created-j"><i>Created at 12/03/2020{this.props.journal.date_now}</i></h5>
              </div> 
            </div>
        );
    }
}


export default JournalList;
