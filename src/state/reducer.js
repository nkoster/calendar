export const initialState = {
  timestamp: new Date().toDateString()
}

export const StateReducer = (state = initialState, action) => {
  console.log('DISPATCH', action.type)
  switch (action.type) {
    case 'updateTimestamp':
      return {
        ...state, timestamp: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
