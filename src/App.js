import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';

const url = 'http://localhost:8080/transactions/1'

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {console.log(data);
         this.setState({data});})
  }

  render() {
    return (
      <Transactions transactions={this.state.data}/>
    );
  }
}

export default App;
