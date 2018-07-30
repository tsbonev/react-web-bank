import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TransactionItem from './TransactionItem'
import { Cookies } from 'react-cookie';

const transactionUrl = '/transactions'

const cookies = new Cookies()

class Transactions extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
        };
      }

    componentDidMount() {
        fetch(transactionUrl, {
            headers: {
                'SID': cookies.get('SID')
            }
        })
          .then(response => response.json())
          .then(data => {
             this.setState({data})
            })
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