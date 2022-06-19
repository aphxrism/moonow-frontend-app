import React from 'react'

export class Component extends React.Component{
    getContext () {
        return this.context as any
    }
}