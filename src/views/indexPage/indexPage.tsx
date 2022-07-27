import React from 'react'
import { Article } from '../../components/article/article'
import styles from './.module.css'

export class IndexPage extends React.Component {
    render () {
        return (
            <div className={styles.ArticlesHolder} >
                <Article data={{
                    title: '1st artilce',
                }} />
                
                <Article data={{
                    title: '2nd article',
                }} />
            </div>
        )
    }
}