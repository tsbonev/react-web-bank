import React, { Component } from 'react'
import SuccessMsg from './SuccessMsg';
import InfoMsg from './InfoMsg';
import ErrorMsg from './ErrorMsg';

class MessageHandler extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          messageText: {},
          statusCode: {}
        };
      }

    componentWillReceiveProps(props){
        this.setState({messageText: props.messageText, statusCode: props.statusCode})
    }

    render() {

        let message;

        switch(this.state.statusCode){
            case 200:
            case 201:
            case 202:
                message = <SuccessMsg message={this.state.messageText}/>
                break;
            case 302:
                message = <InfoMsg message={this.state.messageText}/>
                break;
            case 400:
            case 401:
            case 402:
            case 403:
            case 404:
            case 500:
                message = <ErrorMsg message={this.state.messageText}/>
                break;
            default:
                break;
        }

        return (
            <div className='MessageHandler'>
                {message}
            </div>
        )
    }
}

export default MessageHandler