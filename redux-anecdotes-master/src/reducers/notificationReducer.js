  const initialState = null
  
  export const setNotification = (text) => {
    return {
      type: 'SET_NOTIFICATION',
      text
    }
  }

  export const clearNotification = () => {
    return setNotification(null)
  }
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.text
      default:
        return state
    }
  }
  
  export default notificationReducer