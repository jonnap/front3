import { createContext } from "react"

export const initialState = { theme: "", data: [] }

export const ContextGlobal = createContext()

export const ContextProvider = ({ children }) => {


  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  )
}


