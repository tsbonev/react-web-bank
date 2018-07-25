import React, { Component } from 'react'

const activeUrl = '/active'

class UsersInSystem extends Component {

    constructor(props){
        super(props)

        this.state = {
            active: {},
          };
    }

    componentDidMount() {
        fetch(activeUrl)
          .then(response => response.json())
          .then(active => {
              console.log(active)
             this.setState({active: active});})
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