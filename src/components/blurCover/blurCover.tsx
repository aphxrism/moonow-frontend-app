import React from 'react'
import styles from './.module.css'

export const BlurCover = (props: any) => {

    return (
        <div className={[
            styles.blurCover,
            props.active ? styles.enabled : styles.disabled,
        ].join(' ')} />
    )
}