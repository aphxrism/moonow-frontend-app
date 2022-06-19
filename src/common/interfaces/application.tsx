export interface IApplicationState {
    loginPopUp: boolean

    appName: string
}

export type IApplicationStateContext = IApplicationState & {
    update?: (data: Partial<IApplicationState>) => void
}