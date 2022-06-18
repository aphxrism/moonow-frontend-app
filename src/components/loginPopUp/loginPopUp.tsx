import React from 'react'
import { Component } from '../../common/modules/component'

export class LoginPopUp extends Component {
    render () {

        const { loginPopUp } = this.getContext()
        
        if (!loginPopUp) return <></>

        return (
            <div>
                Sex test
            </div>
        )
    }
}