import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import TransactionItem from './TransactionItem';

class Transactions extends Component {

    render() {
        
        let transactionItems;
        if(this.props.transactions){
            transactionItems = this.props.transactions.map(transaction => {
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