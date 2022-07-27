import React from 'react'
import { ArticleParams } from '../../common/interfaces/article'
import styles from './.module.css'

export const Article = (props: ArticleParams) => {

    return (
        <div className={styles.Article} >
            <strong>{props.data.title}</strong>
        </div>
    )
}