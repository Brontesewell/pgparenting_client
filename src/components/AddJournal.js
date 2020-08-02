
import React, { Component } from 'react';
import Navbar from '../containers/Navbar'
import {connect} from 'react-redux'
import addJournal from '../actions/addJournal'
import { Link } from 'react-router-dom';
require('react-datetime');

class AddJournal extends Component {

    state = {
        date_now: new Date().toLocaleString(),
        text: "",
        kid_id: this.props.kid.id
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // onClick = ()  => {
    //     this.setState(() => {
    //         localStorage.setItem('selectedJournal', JSON.stringify(this.props.selectedJournals));
    //     });
    //        console.log(JSON.parse(localStorage.getItem('selectedJournal')))
    //    }

    render() {
        // console.log(new Date().toLocaleString())
// console.log(this.state.date_now)
     const {date_now, text, kid_id,} = this.state   
     const {history} = this.props
        return (
            <div>
                <h2 id="add-kid">Add a Journal</h2>
                <form className = 'container' onSubmit={(e) => this.props.addJournal(e, this.state, history)}>
                <textarea rows="8" cols="120" name="text" form="usrform" value={text}  onChange={this.handleChange}> Enter text here...</textarea>

            {/* <div id="date-journal">
             <label htmlFor="date_now">Today's Date</label>
                 <input type='text' name="date_now" value={date_now} onChange={this.handleChange}/> */}
{/*                  
                 </div>   */}

                 <button id="btn-add-journal" className="btn" type="submit" >Add Journal</button>
                </form>
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
        addJournal: (e, history, state) => dispatch(addJournal(e, history, state)),
    }
}



export default connect(mapStateToProps, mapsToDispatchProps)(AddJournal);
