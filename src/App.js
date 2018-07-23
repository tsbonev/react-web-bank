import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'
import RegisterUser from './components/RegisterUser'
import ViewUser from './components/ViewUser'
import Login from './components/Login';

//export const url = 'http://localhost:8080'
export const url = 'https://datasource-bank-demo-dot-sacred-union-210613.appspot.com'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/transactions' component={Transactions}/>
        <Route path='/add' component={AddTransaction}/>
        <Route path='/register' component={RegisterUser}/>
        <Route path='/user/:username' component={ViewUser}/>
        <Route path='/login' component={Login}/>
      </Switch>
    );
  }
}

export default App
