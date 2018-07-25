import React, { Component } from 'react'

const userUrl = "/user"

class User extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
        };
      }

    componentDidMount() {
        fetch(userUrl)
          .then(response => response.json())
          .then(data => {
             this.setState({data})
            })
      }

    render() {

        return (
            <div className='User'>
                <span>ID: {this.state.data.id}</span><br/>
                <span>Username: {this.state.data.username}</span>
            </div>
        )
    }
}

export default User