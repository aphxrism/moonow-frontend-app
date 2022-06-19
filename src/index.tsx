import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './views/app/app'
import reportWebVitals from './reportWebVitals'
import { ApplicationStateProvider } from './common/applicationStateContext'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <ApplicationStateProvider>
            <App />
        </ApplicationStateProvider>
    </React.StrictMode>
)

reportWebVitals()
