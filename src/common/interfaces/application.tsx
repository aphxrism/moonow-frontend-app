export interface IApplicationStorage {
    appName: string

    loginPopUp: boolean
}

export type IApplicationStorageContext = IApplicationStorage & {
    update: any
}