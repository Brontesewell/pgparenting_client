import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <Fragment>
            <nav>
                <ul>
                    { props.currentUser ? (
                        <Fragment>
                            <li><Link to='/home'> Home</Link></li>
                            <li><Link to='/rooms'>Chat Rooms</Link></li>
                            <Link to='/'><li onClick={props.logout} >Logout</li></Link>
                            <li id="current-user-nav">Welcome, {props.currentUser.attributes.email}</li>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <li><Link to='/' >Welcome</Link></li>
                            <li><Link to='/login' >Login</Link></li>
                            <li><Link to='/create_account' >Create an Account</Link></li>
                        </Fragment>
                    )}   
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBar