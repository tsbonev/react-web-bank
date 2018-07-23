import React, { Component } from 'react'

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
                id: this.refs.id.value,
                userId: this.refs.userId.value,
                username: this.refs.username.value,
                operation: this.refs.operation.value,
                date: this.refs.date.value,
                amount: this.refs.amount.value
            }}, function(){
                this.props.addTransaction(this.state.newTransaction)
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
                    <label>Transaction id</label>
                    <input required type="number" ref="id"/>
                    <br/>
                    <label>Username</label>
                    <input required type="text" ref="username"/>
                    <br/>
                    <label>User id</label>
                    <input required type="number" ref="userId"/>
                    <br/>
                    <label>Date</label>
                    <input required type="text" ref="date"/>
                    <br/>
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