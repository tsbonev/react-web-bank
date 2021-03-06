import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import Register from './components/Register'
import User from './components/User'
import Login from './components/Login';
import MessageHandler from './components/MessageHandler';
import Logout from './components/Logout';
import Navigator from './components/Navigator'

//export const url = 'http://localhost:8080'
//export const url = 'https://datasource-bank-demo-dot-sacred-union-210613.appspot.com'

export const handleReturn = (response, successMessage, failMessage, context) => {
  if(response.ok || (response.status >= 300 && response.status <= 399)){
      context.props.callback(successMessage, response.status)
      return true
  }
  else if (response.status >= 400 && response.status <= 499){
      context.props.callback(failMessage, response.status)
      return false
  }
  else{
      context.props.callback("Something went wrong!", response.status)
      return true
  }
}

export const redirectTo = (path, context) => {
  context.props.history.push(path)
}

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      messageText: {},
      statusCode: {}
    };
  }

  callBackFromChild = (messageText, statusCode) => {
    this.setState({messageText: messageText, statusCode: statusCode})
  }
  
  render() {
    return (
      <div>
        <Navigator update={this.state.messageText}/>
        <div className="container">

          <MessageHandler messageText={this.state.messageText}
          statusCode={this.state.statusCode}/>

          <Switch>
            <Route path='/transactions' component={Transactions}/>
            <Route path='/user' component={User}/>

            <Route path='/logout' 
            render={(props) => <Logout callback={this.callBackFromChild} {...props}/>}/>
            <Route path='/add' 
            render={(props) => <AddTransaction callback={this.callBackFromChild} {...props}/>}/>
            <Route path='/register'
            render={(props) => <Register callback={this.callBackFromChild} {...props}/>}/>
            <Route path='/login'
            render={(props) => <Login callback={this.callBackFromChild} {...props}/>} />
        </Switch>

        </div>
      </div>
    );
  }
}

export default App
