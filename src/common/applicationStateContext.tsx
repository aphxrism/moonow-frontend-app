import React, { createContext, useContext } from 'react'
import { ApplicationStateValue } from './constants/applicationState'
import { IApplicationState, IApplicationStateContext } from './interfaces/application'

export const ApplicationStateContext = createContext<IApplicationStateContext>(ApplicationStateValue)

export class ApplicationStateProvider extends React.Component<any> {

    state: IApplicationStateContext

    constructor (props: any) {
        super(props)

        this.state = ApplicationStateValue
    }
  
    update = (data: Partial<IApplicationState>) => {
        this.setState(prev => {
            return {
                ...prev,
                ...data,
            }
        })
    }
  
    render () {
        return (
            <ApplicationStateContext.Provider
                value={{
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