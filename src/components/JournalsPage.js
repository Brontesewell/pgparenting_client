
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addKid from '../actions/addKid'
import JournalList from './JournalList'
import AddJournal from './AddJournal'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

class JournalsPage extends Component {

    // state = {
    //     selectedJournals: this.props.selectedJournals
    //   }

    // componentDidMount () {
    //     localStorage.setItem('selectedJournal', JSON.stringify(this.props.selectedJournals));
    //   }
      
// componentCleanUp = () => {
  
//     localStorage.setItem('selectedJournal', JSON.stringify(this.props.selectedJournals))
//   }
    //   componentWillUnmount () {
    //     localStorage.setItem('selectedJournal', JSON.stringify(this.props.selectedJournals))
    //   }

//   componentDidMount(){
//       this.setState({
//         clickedJournal: JSON.parse(localStorage.getItem('selectedJournal'))
//       })
//   }

    handleBackClick = () => {
        window.location.href="/profile"
        this.props.clearSelectedJournals()
        localStorage.removeItem("selectedJournal")
    }

    render() {
console.log(this.props.selectedJournals)
// console.log(this.state.selectedJournals)

        return (
            <div>
                <div className = 'row'>
                    {<Navbar/>}
                </div>
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
