import { createContext, useContext, useReducer } from 'react'
import initialState from './initialState'
import reducer from './reducer'

const MainRouterContext = createContext(initialState)

export const MainRouterProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const currentRoute = state?.currentRoute
  const goTo = to => dispatch({ type: 'change_route', to })

  return (
    <MainRouterContext.Provider value={{ currentRoute, goTo }} {...props}>
      {children}
    </MainRouterContext.Provider>
  )
}

export const useMainRouterContext = () => useContext(MainRouterContext)
