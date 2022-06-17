import React, { Component } from 'react'
import { defaultApplicationStorageValue } from './constants/applicationStorage'
import { IApplicationStorage } from './interfaces/application'

const { Provider, Consumer } = React.createContext(defaultApplicationStorageValue)

export class ApplicationStorageProvider extends Component<any> {
    constructor (props: any) {
        super(props)

        this.state = defaultApplicationStorageValue
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
        return <Provider value={defaultApplicationStorageValue}>
            {this.props.children}
        </Provider>;
    }
}

export { Consumer as ApplicationStorageConsumer };