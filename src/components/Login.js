import React, { Component } from 'react'

const loginUrl = '/login'

class Login extends Component {

    handleReturn = (response) => {
        if(response.ok){
            this.props.callback("Logged in!", response.status)
            return true
        }
        else if (response.status === 401){
            this.props.callback("User not registered!", response.status)
            return false
        }
        else{
            this.props.callback("Something went wrong!", response.status)
            return true
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
            if(this.handleReturn(response)){
                console.log("Should redirect")
                this.redirectTo('/')
            }
            else{
                console.log("Should refresh")
                this.redirectTo('/login')
            }
        })
      }

    constructor(){
        super()
        this.state = {
            newLogin:{}
        }
    }

    redirectTo(path){
        console.log(this.props)
        this.props.history.push(path)
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