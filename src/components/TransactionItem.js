import React, { Component } from 'react'

class TransactionItem extends Component {

    render() {
        
        return (
            <tr>
            <td>
                {this.props.transaction.id}
            </td>
            <td>
                {this.props.transaction.username}
            </td>
            <td>
                {this.props.transaction.userId}
            </td>
            <td>
                {this.props.transaction.date.date.year
                + '.'
                + this.props.transaction.date.date.month
                + '.'
                + this.props.transaction.date.date.day
                + ' '
                + this.props.transaction.date.time.hour
                + ':'
                + this.props.transaction.date.time.minute
                + ':'
                + this.props.transaction.date.time.second}
            </td>
            <td>
                {this.props.transaction.operation}
            </td>
            <td>
                {this.props.transaction.amount}
            </td>
            </tr>
        )
    }
}

export default TransactionItem