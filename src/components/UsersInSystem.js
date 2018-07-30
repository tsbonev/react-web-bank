import React, { Component } from 'react'
import { Cookies } from 'react-cookie';

const activeUrl = '/active'

const cookies = new Cookies()

class UsersInSystem extends Component {

    constructor(props){
        super(props)

        this.state = {
            active: 0,
            update: {}
          };
    }

    componentDidMount() {
        fetch(activeUrl, {
            headers: {
                'SID': cookies.get('SID')
            }
        })
          .then(response => response.json()
                .then(active => {
                    console.log(active)
                    this.setState({active: active})
                    }
                )
            )
    }

    componentWillReceiveProps(props){
        this.componentDidMount()
        this.setState({update: {}})
    }

    render() {

        let activeCount = JSON.stringify(this.state.active) 

        return (
            <li>
            <a>
                Users in system: {activeCount}
            </a>
            </li>
        )
    }
}

export default UsersInSystem