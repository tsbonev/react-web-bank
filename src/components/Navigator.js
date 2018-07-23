import React, { Component } from 'react'
import LoginView from '../components/LoginView'

class Navigator extends Component {

    render() {

        return (
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Servlet bank</a>
            </div>
            <div className="navbar-collapse collapse">
                <LoginView />
            </div>
        </div>
        )
    }
}

export default Navigator