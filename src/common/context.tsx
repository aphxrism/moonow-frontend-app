import React, { Component } from 'react'
import { defaultApplicationStorageValue } from './constants/applicationStorage'
import { IApplicationStorage } from './interfaces/application'

export class ApplicationStorageProvider extends Component<any> {
    constructor (props: any) {
        super(props)

        this.state = defaultApplicationStorageValue

        this.context = React.createContext({
            ...defaultApplicationStorageValue,
            update: this.update, 
        })
    }

    update (params: Partial<IApplicationStorage>) {
        this.setState(prev => {
            return {
                ...prev,
                ...params,
            }
        })
    }

    render() {
        const { Provider } = this.context as React.Context<{
            update: (params: Partial<IApplicationStorage>) => void;
        } & IApplicationStorage>

        return <Provider value={{
            ...defaultApplicationStorageValue,
            update: this.update, 
        }}>
            {this.props.children}
        </Provider>;
    }
}