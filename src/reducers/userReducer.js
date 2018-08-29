const initialUserState = {
  name: null,
  email: null,
}

function userReducer(state = initialUserState, action){
  switch(action.type){
    case "LOGIN": 
      // localStorage.setItem('jwt', action.payload.jwt)
      console.log({email: action.payload.email})
      return {...state, email: action.payload.email}
    case "REGISTER":
      return {...state, name: action.payload.name, email: action.payload.email}
    case "LOGOUT":
      return initialUserState;
    default:
      return state
  }
}

export default userReducer