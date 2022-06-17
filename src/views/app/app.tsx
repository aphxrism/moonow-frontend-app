import { Route, Routes } from 'react-router-dom'
import { IndexPage } from '../indexPage/indexPage'
import styles from './.module.css'
import { Header } from '../../components/header/header'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

export class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className={styles.App} >
                    <Header />
                    <div>
                        <Routes>
                            <Route path='/' element={<IndexPage />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}