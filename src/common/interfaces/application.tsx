import { Languages } from "../constants/languages"

export interface IApplicationState {
    loginPopUp: boolean

    appName: string

    language: Languages
}

export type IApplicationStateContext = IApplicationState & {
    update?: (data: Partial<IApplicationState>) => void
    getTextStorage?: () => { [key: string]: string }
}