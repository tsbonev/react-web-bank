import React, { Component } from 'react'

class SuccessMsg extends Component {

    render() {

        return (
            <div className='alert alert-success'>
                <b> Success!</b> {this.props.message}
            </div>
        )
    }
}

export default SuccessMsg