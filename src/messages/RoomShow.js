import React, { Component } from 'react';
import ChatFeed from './ChatFeed';
import RoomWebSocket from './RoomWebSocket';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'

class RoomShow extends Component {
    state = {
        newMessage: '',
        users: this.props.users

    }
      
    displayUsers = (users) => {
        return this.props.roomData.users.map( user => {
            return <li key={user.id}>{user.email}</li>
        })
    }

    handleMessageInput = (event) => {
        this.setState({
            newMessage: event.target.value
        })
    }

    submitMessage = (event) => {
        event.preventDefault()

        this.setState({
            newMessage: ''
        })

        const message = {
            content: this.state.newMessage,
            user_id: this.props.currentUser.id,
            room_id: this.props.roomData.room.id
        }

        fetch("http://localhost:3000/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({message: message})
        })
        .then(resp => resp.json())
        .then(result => {
            let messageDiv = document.getElementById('messages')
            messageDiv.scrollTop = messageDiv.scrollHeight
        })
    }

    render() {
        console.log(this.props.roomData)
        
        return (
            <div>

                <div className ='row'>
                    <Navbar />
                </div>

                { Object.keys(this.props.roomData.room).length > 0 ? (
                    <div id='room-show'>
                        <h1 id='room-header'>Welcome to the {this.props.roomData.room.attributes.name} Room!</h1>
                        <div id='room-sidebar'>
                            <h3>{this.props.roomData.room.attributes.name} Group Members</h3>
                            <ul id='users-list'>
                                {this.displayUsers(this.props.roomData.room.attributes.users.data)}
                            </ul>
                        </div>
                        <ChatFeed room={this.props.roomData.room} currentUser={this.props.currentUser} />
                        <form id='chat-form' onSubmit={this.submitMessage}>
                            <h3>Post a new message:</h3>
                            <textarea type='text' value={this.state.newMessage} onChange={this.handleMessageInput}></textarea>
                            <br></br>
                            <input type='submit'></input>
                        </form>
                    </div>
                ) : null }
                
                <RoomWebSocket
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    roomData={this.props.roomData}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps)(RoomShow);