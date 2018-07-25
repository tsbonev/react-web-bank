import React, { Component } from 'react'

const userUrl = "/user"

class ViewUser extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
        };
      }

    componentDidMount() {
        fetch(userUrl)
          .then(response => response.json())
          .then(data => {console.log(data);
             this.setState({data});})
      }

    render() {

        return (
            <div className='ViewUser'>
                <span>ID: {this.state.data.id}</span><br/>
                <span>Username: {this.state.data.username}</span>
            </div>
        )
    }
}

export default ViewUser