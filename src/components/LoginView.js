import React, { Component } from 'react'

class LoginView extends Component {

    render() {

        return (
            <ul className="nav navbar-nav">

                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
    
                <li><a>Users in system: </a></li>
    
            </ul> 
        )
    }
}

export default LoginView