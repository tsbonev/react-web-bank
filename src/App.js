import React, { Component } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';

const url = 'http://localhost:8080/transactions/1'
const postUrl = 'http://localhost:8080/transactions/save'

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

  handleAddTransaction(transaction){

    console.log(transaction)
    console.log(postUrl)
    fetch(postUrl, {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    id: transaction.id,
    operation: transaction.operation,
    userId: transaction.userId,
    date: transaction.data,
    amount: transaction.amount,
    username: transaction.username
  })
})

  }

  render() {
    return (
      <div>
      <Transactions transactions={this.state.data}/>
      <AddTransaction addTransaction={this.handleAddTransaction}/>
      </div>
    );
  }
}

export default App;
