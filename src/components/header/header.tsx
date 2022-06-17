import { ApplicationStorageConsumer } from '../../common/context'
import { IApplicationStorage } from '../../common/interfaces/application'
import styles from './.module.css'
import React from 'react'

export class Header extends React.Component {
    render () {
        return (
            <header className={styles.header} >
                <ApplicationStorageConsumer>
                    {(storage: IApplicationStorage) => (
                        <h1 className={styles.headerSign} >{storage.appName}</h1>
                    )}
                </ApplicationStorageConsumer>
            </header>
        )
    }
}