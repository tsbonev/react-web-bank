import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import RegisterUser from './components/RegisterUser'
import ViewUser from './components/ViewUser'
import Login from './components/Login';
import MessageHandler from './components/MessageHandler';

//export const url = 'http://localhost:8080'
//export const url = 'https://datasource-bank-demo-dot-sacred-union-210613.appspot.com'

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
  
  LoginPage = (props) => {
    return(
        <Login callback={this.callBackFromChild}/>
    );
  }
  

  render() {
    return (
      <div>
        <MessageHandler messageText={this.state.messageText}
        statusCode={this.state.statusCode}/>
          <Switch>
            <Route path='/transactions' component={Transactions}/>
            <Route path='/add' component={AddTransaction}/>
            <Route path='/register' component={RegisterUser}/>
            <Route path='/user' component={ViewUser}/>
            <Route path='/login' component={this.LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App
