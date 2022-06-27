export const initialState = {
  timestamp: new Date().toString()
}

export const StateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateTimestamp':
      // console.log(action.payload)
      return {
        ...state, timestamp: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
