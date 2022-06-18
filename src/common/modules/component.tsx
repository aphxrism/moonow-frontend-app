import React from 'react'
import { ApplicationStorageContext } from '../context'

export class Component extends React.Component{
    getContext () {
        return this.context as any
    }
}

Component.contextType = ApplicationStorageContext