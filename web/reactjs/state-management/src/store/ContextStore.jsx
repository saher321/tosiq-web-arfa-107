import { createContext } from "react"

export const Store = createContext();

const ContextStore = ({ children }) => {
    let appName = "State Management"
    let appVersion = 19.1
    return (
        <Store.Provider value={{appName, appVersion}}>
            { children }
        </Store.Provider>
    )
}

export default ContextStore