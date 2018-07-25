import React, { Component } from 'react'

class ErrorMsg extends Component {

    render() {

        return (
            <div className='alert alert-danger'>
                <b>Error!</b> {this.props.message}
            </div>
        )
    }
}

export default ErrorMsg