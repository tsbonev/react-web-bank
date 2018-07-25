import React, { Component } from 'react'
import LoginPanel from '../components/LoginPanel'

class Navigator extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          update: {}
        };
      }

    componentWillReceiveProps(props){
        this.setState({update: props.update})
    }

    render() {

        return (
            <div className="navbar navbar-inverse">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Spark REST bank</a>
            </div>
            <div className="navbar-collapse collapse">
                <LoginPanel update={this.state.update}/>
            </div>
        </div>
        </div>
        )
    }
}

export default Navigator