import React, { Component } from 'react'
import UsersInSystem from './UsersInSystem';

class LoginView extends Component {


    render() {

        return (
            <div>
            <ul className="nav navbar-nav">

            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <UsersInSystem />
            </ul>
            </div>
        )
    }
}

export default LoginView