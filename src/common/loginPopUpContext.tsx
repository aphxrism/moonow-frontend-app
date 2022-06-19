import React, { createContext, useContext } from 'react'
import { ILogInPopUp } from './interfaces/application'

export const LogInPopUpContext = createContext<ILogInPopUp>({
    active: false,
    appName: 'moonow',
})

export class LogInPopUpProvider extends React.Component<any> {

    constructor (props: any) {
        super(props)

        this.state = {
            active: false,
            appName: 'moonow',
        }
    }
  
    toggle = (data: any) => {
        this.setState(prev => {
            return {
                ...prev,
                ...data,
            }
        })
    }
  
    render () {
        return (
            <LogInPopUpContext.Provider
                value={{
                    toggle: this.toggle,
                    ...this.state as ILogInPopUp,
                }}
            >
                {this.props.children}
            </LogInPopUpContext.Provider>
        )
    }
}

export const useLogInPopUpContext = () => {
    const ctx = useContext(LogInPopUpContext)

    if (!ctx.toggle) throw new Error('Update is not defined')

    return ctx
}