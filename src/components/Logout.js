import React, { Component } from 'react'
import { handleReturn } from '../App'
import { redirectTo } from '../App'

const logoutUrl = '/logout'

class Logout extends Component {

    componentDidMount(){
        fetch(logoutUrl, {
            method: 'POST'
        }).then(response => 
            response.json()
                .then( response => {
                    if(handleReturn(response,
                        "User logged out!", "User already logged out!", this)){
                        redirectTo('/', this)
                    }
                    else{
                        redirectTo('/login', this)
                    }
                }
            )
        ) 
    }

    render() {

        return (
            <div className='Logout'>
                
            </div>
        )
    }
}

export default Logout