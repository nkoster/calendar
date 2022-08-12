import React, { useReducer, createContext, useContext } from 'react'
import { StateReducer, initialState } from './reducer'

const StateContext = createContext(initialState)
const StateDispatchContext = createContext(null)

export const State = _ => {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error('State must be a child of StateProvider')
  }
  return context
}

export const StateDispatch = _ => {
  const context = useContext(StateDispatchContext)
  if (!context) {
    throw new Error('StateDispatch must be a child of StateProvider')
  }
  return context
}

export const StateProvider = ({ children }) => {
  const [user, dispatch] = useReducer(StateReducer, initialState, () => initialState)
  return (
    <StateContext.Provider value={user}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  )
}
