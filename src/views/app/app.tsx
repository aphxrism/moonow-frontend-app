import { Route, Routes } from 'react-router-dom'
import { IndexPage } from '../indexPage/indexPage'
import styles from './.module.css'
import { Header } from '../../components/header/header'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Row } from '../../components/row/row'
import { LoginPopUp } from '../../components/loginPopUp/loginPopUp'
import { useApplicationStateContext } from '../../common/applicationStateContext'
import { BlurCover } from '../../components/blurCover/blurCover'

export const App = () => {
    const { loginPopUp } = useApplicationStateContext()

    const blurCoverActive: boolean = (loginPopUp) ? true : false

    return (
        <BrowserRouter>
            <div className={styles.App} >
                <Header />
                
                <Row>
                    <Routes>
                        <Route path='/' element={<IndexPage />} />
                    </Routes>
                </Row>

                <BlurCover active={blurCoverActive} />

                <LoginPopUp />
            </div>
        </BrowserRouter>
    )
}