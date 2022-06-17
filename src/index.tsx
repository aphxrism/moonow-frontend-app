import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './views/app/app'
import reportWebVitals from './reportWebVitals'
import { ApplicationStorageProvider } from './common/context'
import { defaultApplicationStorageValue } from './common/constants/applicationStorage'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <ApplicationStorageProvider value={defaultApplicationStorageValue} >
            <App />
        </ApplicationStorageProvider>
    </React.StrictMode>
)

reportWebVitals()
