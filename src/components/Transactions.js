import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import TransactionItem from './TransactionItem';
import { url } from '../App'

const transactionUrl = '/transactions/'

class Transactions extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
        };
      }

    componentDidMount() {
        console.log(url + transactionUrl)
        fetch(url + transactionUrl)
          .then(response => response.json())
          .then(data => {console.log(data);
             this.setState({data});})
    }

    render() {
        
        let transactionItems;
        if(this.state.data){
            transactionItems = this.state.data.map(transaction => {
                return (
                    <TransactionItem key={transaction.id} transaction={transaction}/>
                )
            })
        }

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                    <th>Transaction Id</th>
                    <th>Username</th>
                    <th>User Id</th>
                    <th>Date</th>
                    <th>Operation</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {transactionItems}
                </tbody>
            </Table>
        )
    }
}

export default Transactions