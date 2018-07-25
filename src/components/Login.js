import React, { Component } from 'react'
import { handleReturn } from '../App'
import { redirectTo } from '../App'

const loginUrl = '/login'

class Login extends Component {

    constructor(){
        super()
        this.state = {
            newLogin:{}
        }
    }
    
    handleLogin = (login) => {   
        fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: login.username,
                password: login.password
            })
        }).then(response => {

            if(handleReturn(response
            , "User logged in!", "User not found!", this)){
                redirectTo('/', this)
            }
            else{
                redirectTo('/login', this)
            }
        })
      }

    handleSubmit(e){
        this.setState({newLogin: {
            username: this.refs.username.value,
            password: this.refs.password.value
        }}, function(){
            this.handleLogin(this.state.newLogin)
        })
    e.preventDefault()
    }

    render() {

        return (
                <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Username</label>
                        <input required type="text" ref="username"/>
                        <br/>
                        <label>Password</label>
                        <input required type="password" ref="password"/>
                        <br/>
                    </div>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

export default Login