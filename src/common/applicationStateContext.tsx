import React, { createContext, useContext } from 'react'
import { ApplicationStateValue } from './constants/applicationState'
import { Languages } from './constants/languages'
import { IApplicationState, IApplicationStateContext } from './interfaces/application'
import { ITextsItem } from './interfaces/texts'
import { texts } from './modules/texts'

export const ApplicationStateContext = createContext<IApplicationStateContext>(ApplicationStateValue)

export class ApplicationStateProvider extends React.Component<any> {

    state: IApplicationStateContext

    private textStorage: ITextsItem

    constructor (props: any) {
        super(props)

        this.state = ApplicationStateValue

        this.textStorage = texts[this.state.language]

        if (!this.textStorage) this.textStorage = texts[Languages.en]
    }
  
    update = (data: Partial<IApplicationState>) => {
        this.setState(prev => {
            return {
                ...prev,
                ...data,
            }
        })
    }

    getTextStorage = () => {
        return this.textStorage
    }
  
    render () {
        return (
            <ApplicationStateContext.Provider
                value={{
                    getTextStorage: this.getTextStorage,
                    update: this.update,
                    ...this.state,
                }}
            >
                {this.props.children}
            </ApplicationStateContext.Provider>
        )
    }
}

export const useApplicationStateContext = () => {
    const ctx = useContext(ApplicationStateContext)

    if (!ctx.update) throw new Error('Update is not defined')

    return ctx
}