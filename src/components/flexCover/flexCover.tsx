import React from 'react'
import { IDefaultProps } from '../../common/interfaces/props'
import styles from './.module.css'

export const FlexCover = (props: IDefaultProps) => {

    return (
        <div className={styles.flexCover} >{props.children}</div>
    )
}