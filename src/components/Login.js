import React, { Component } from 'react'

const loginUrl = '/login'

function handleReturn(response){

    if(response.ok){
        console.log('Success!')
    }
    else if (response.state === 400){
        console.log('Invalid login!')
    }
    else{
        console.log('Something went wrong!')
    }
}

function  handleLogin(login){
    console.log(login)
    
    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: login.username,
            password: login.password
        })
    }).then(response => handleReturn(response))
  }
  
class Login extends Component {

    constructor(){
        super()
        this.state = {
            newLogin:{}
        }
    }

    handleSubmit(e){

        this.setState({newLogin: {
            username: this.refs.username.value,
            password: this.refs.password.value
        }}, function(){
            handleLogin(this.state.newLogin)
        })

    console.log('Sumbitted')
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