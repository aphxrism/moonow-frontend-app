import React from 'react'
import { useApplicationStateContext } from '../../common/applicationStateContext'

export const LoginPopUp = () => {
    const { loginPopUp } = useApplicationStateContext()
    
    if (!loginPopUp) return <></>

    return (
        <>
            <div>
                Sex test
            </div>
        </>
    )
}