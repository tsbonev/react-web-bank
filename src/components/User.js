import React, { Component } from 'react'
import { Cookies } from 'react-cookie';

const userUrl = "/user"

const cookies = new Cookies()

class User extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
        };
      }

    componentDidMount() {
        fetch(userUrl, {
            headers: {
                'SID': cookies.get('SID')
            }
        })
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