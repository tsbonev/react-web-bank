import React, { Component } from 'react'
import { handleReturn } from '../App'
import { redirectTo } from '../App'
import { Cookies } from 'react-cookie';

const logoutUrl = '/logout'

const cookies = new Cookies()

class Logout extends Component {

    componentDidMount(){
        fetch(logoutUrl, {
            method: 'POST',
            headers: {
                'SID': cookies.get('SID')
            }
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