export const initialState = {
  timestamp: new Date().toString(),
  appointment: {
    showModal: false,
    startTime: null
  }
}

export const StateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateTimestamp':
      return {
        ...state, timestamp: action.payload
      }
    case 'updateAppointment':
      return {
        ...state, appointment: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
