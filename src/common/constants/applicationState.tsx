import { IApplicationStateContext } from '../interfaces/application'
import { Languages } from './languages'

let localStorageLanguage = localStorage.getItem('language')

const detectBrowserLanguage = require('detect-browser-language')

if (!localStorageLanguage) {
    const detectLang = detectBrowserLanguage()

    const newLang = Object.keys(Languages).includes(detectLang) 
        ? detectLang 
        : Languages.en

    localStorage.setItem('language', newLang)

    localStorageLanguage = newLang
}

export const ApplicationStateValue: IApplicationStateContext = {
    loginPopUp: false,
    appName: 'moonow',
    language: localStorageLanguage as Languages,
}