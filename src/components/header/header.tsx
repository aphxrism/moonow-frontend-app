import React from 'react'
import { useApplicationStateContext } from '../../common/applicationStateContext'
import styles from './.module.css'

export const Header = () => {

    const { 
        appName,
        loginPopUp,
        update,
    } = useApplicationStateContext()

    if (!update) return <></>

    return (
        <header onClick={() => {
            update({
                loginPopUp: !loginPopUp,
            })
        }} className={styles.header} >
            <h1 className={styles.headerSign} >{appName}</h1>
        </header>
    )
}