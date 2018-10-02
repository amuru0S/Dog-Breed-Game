const initialState = {}

const reducer = (state = initialState, action = {}) => {
    switch (action.type){
      case ADD_IMG_TO_STORE:
        return action.payload
      default:
        return state
    }
  }
  
  export default reducer