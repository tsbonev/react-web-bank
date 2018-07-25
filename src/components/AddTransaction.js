import React, { Component } from 'react'

const transactionAddUrl = '/transactions/save' 

function  handleAddTransaction(transaction){
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
    })
  }

class AddTransaction extends Component {

    constructor(){
        super()
        this.state = {
            newTransaction:{}
        }
    }

    static defaultProps = {
        operations: ["DEPOSIT", "WITHDRAW"]
    }

    handleSubmit(e){

            this.setState({newTransaction: {
                operation: this.refs.operation.value,
                amount: this.refs.amount.value
            }}, function(){
                handleAddTransaction(this.state.newTransaction)
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