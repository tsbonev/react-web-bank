import React, { Component } from 'react'
import { handleReturn } from '../App'
import { redirectTo } from '../App'

const transactionAddUrl = '/transactions/save'  

class AddTransaction extends Component {

    constructor(){
        super()
        this.state = {
            newTransaction:{}
        }
    }

    handleAddTransaction = (transaction) => {
        console.log(transaction)
        
        fetch(transactionAddUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                operation: transaction.operation,
                amount: transaction.amount,
            })
        }).then(response => {

            if(handleReturn(response
            , "Transaction successful!", "Transaction could not be executed!", this)){
                redirectTo('/', this)
            }
            else{
                redirectTo('/add', this)
            }
        })
      }

    static defaultProps = {
        operations: ["DEPOSIT", "WITHDRAW"]
    }

    handleSubmit(e){

            this.setState({newTransaction: {
                operation: this.refs.operation.value,
                amount: this.refs.amount.value
            }}, function(){
                this.handleAddTransaction(this.state.newTransaction)
            })

        console.log('Sumbitted')
        e.preventDefault()
        }

    render() {

        let operationOptions = this.props.operations.map(category => {
            return <option key={category} value={category}>{category}</option> 
        })

        return (
            <div>
            <h3>Add transaction</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    <label>Amount</label>
                    <input required type="number" ref="amount"/>
                    <br/>
                    <label>Operation</label>
                    <br/>
                    <select ref="operation">
                        {operationOptions}
                    </select>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default AddTransaction