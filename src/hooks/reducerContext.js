import { createContext, useContext, useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {...state, ...action.payload}
    default: 
      return {...state}
  }
}

const initState = {
  color: 'red',
}

const initcontext = createContext(initState)

// 注入
export const ReducerProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initState)
  return <initcontext.Provider value={{dispatch, ...state}} children={children} />
}

// 返回context
export const useReducerContext = () => {
  const context = useContext(initcontext)
  if (context) {
    return context
  }
}