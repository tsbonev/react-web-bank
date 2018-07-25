import React, { Component } from 'react'
import UsersInSystem from './UsersInSystem';

const userUrl = '/user'

class LoginPanel extends Component {

    constructor(props){
        super(props)

        this.state = {
            user: null,
            logged: false,
            update: {}
          };
    }

    componentDidMount() {
        fetch(userUrl)
            .then(response =>
                response.json()
                .then(user => {
                    if(user.username !== undefined){
                      this.setState({user: user, logged: true})
                    }
                })
            )
    }

    componentWillReceiveProps(props){
        this.componentDidMount()
        this.setState({update: props.update})
    }

    render() {

        console.log(this.state.user)
        console.log(this.state.logged)

        let loginPanel = <ul className="nav navbar-nav">
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <UsersInSystem update={this.state.update} key="usersInSystem"/>
        </ul>

        if(this.state.logged === true){
            loginPanel = 
            <ul className="nav navbar-nav">
            <li><a href="/transactions">Welcome, {this.state.user.username}</a></li>
            <li><a href="/add">Make transaction</a></li> 
            <li><a href="/logout">Logout</a></li>
            <UsersInSystem update={this.state.update} key="usersInSystem"/>
            </ul>;
        }

        return (
            <div>
            {loginPanel}
            </div>
        )
    }
}

export default LoginPanel