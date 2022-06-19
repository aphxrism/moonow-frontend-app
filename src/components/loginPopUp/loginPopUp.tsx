import React from 'react'
import { useApplicationStateContext } from '../../common/applicationStateContext'

export const LoginPopUp = () => {
    const { loginPopUp, update, getTextStorage } = useApplicationStateContext()
    
    if (!loginPopUp || !update || !getTextStorage) return <></>

    const texts = getTextStorage()

    return (
        <div>
            <input type='email' />

            <br />

            <button onClick={() => update({
                loginPopUp: false,
            })} >{texts.close}</button>
        </div>
    )
}