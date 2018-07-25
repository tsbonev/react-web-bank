import React, { Component } from 'react'

const registerUrl = '/register'

function  handleRegister(registration){
    console.log(registration)
    
    fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: registration.username,
            password: registration.password
        })
    })
  }

class RegisterUser extends Component {


    constructor(){
        super()
        this.state = {
            newRegistration:{}
        }
    }

    handleSubmit(e){

        this.setState({newRegistration: {
            username: this.refs.username.value,
            password: this.refs.password.value
        }}, function(){
            handleRegister(this.state.newRegistration)
            this.props.history.push('/');
        })

    console.log('Sumbitted')
    e.preventDefault()
    }

    render() {

        return (
            <div>
            <h3>Register</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Username</label>
                    <input required type="text" ref="username"/>
                    <br/>
                    <label>Password</label>
                    <input required type="password" ref="password"/>
                    <br/>
                </div>
                <input type="submit" value="Register"/>
            </form>
        </div>
        )
    }
}

export default RegisterUser