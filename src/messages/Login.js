import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })    
        })
        .then(response => response.json())
        .then(data => {
            if (data.authenticated) {
                localStorage.setItem('jwt_token', data.token)
                this.props.updateCurrentUser(data.user.data)
            } else {
                alert('Password/email combination not found')
            }   
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={(e) => this.handleSubmit(e)} >
                    <input type='text' name='email' value={this.state.email} onChange={(e) => this.handleChange(e)} placeholder='email' />
                    <input type='password' name='password' onChange={(e) => this.handleChange(e)} placeholder='password' />
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default Login