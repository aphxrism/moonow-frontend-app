import React from 'react'
import { IDefaultProps } from '../../common/interfaces/props'
import styles from './.module.css'

export class Row extends React.Component<IDefaultProps> {
    render () {
        return (
            <div className={styles.row} >
                {this.props.children}
            </div>
        )
    }
}