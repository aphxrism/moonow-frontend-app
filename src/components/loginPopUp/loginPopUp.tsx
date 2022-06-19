import React from 'react'
import { useLogInPopUpContext } from '../../common/loginPopUpContext'

export const LoginPopUp = () => {
    const { active } = useLogInPopUpContext()
    
    if (!active) return <></>

    return (
        <div>
            Sex test
        </div>
    )
}