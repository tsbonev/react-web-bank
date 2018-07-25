import React, { Component } from 'react'

const userUrl = "/user/"

class ViewUser extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          data: {},
        };
      }

    componentDidMount() {
        fetch(userUrl + this.props.match.params.username)
          .then(response => response.json())
          .then(data => {console.log(data);
             this.setState({data});})
      }

    render() {

        return (
            <div className='ViewUser'>
                <span>{this.state.data.id}</span><br/>
                <span>{this.state.data.username}</span>
            </div>
        )
    }
}

export default ViewUser