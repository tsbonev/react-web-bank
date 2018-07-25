import React, { Component } from 'react'

class InfoMsg extends Component {

    render() {

        return (
            <div className='alert alert-info'>
                <b>Info!</b> {this.props.message}
            </div>
        )
    }
}

export default InfoMsg