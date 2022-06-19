import React from 'react'
import { useLogInPopUpContext } from '../../common/loginPopUpContext'
import styles from './.module.css'

export const Header = () => {

    const { active, toggle } = useLogInPopUpContext()

    if (!toggle) return <></>

    return (
        <header onClick={() => {
            toggle({
                active: !active,
            })
        }} className={styles.header} >
            <h1 className={styles.headerSign} >{active.toString()}</h1>
        </header>
    )
}