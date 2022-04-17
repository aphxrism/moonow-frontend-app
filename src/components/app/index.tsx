import { Route, Routes } from 'react-router-dom'
import { IndexPage } from '../indexPage'
import styles from './.module.css'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.App} >
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export { App }