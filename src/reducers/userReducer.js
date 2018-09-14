const initialUserState = {
  name: null,
  email: null,
  loggedIn: false,
  boards: null
}

function userReducer(state = initialUserState, action){
  switch(action.type){
    case "SET_CURRENT_USER": 
    console.log("hi", action.payload)
      // localStorage.setItem('jwt', action.payload.jwt)
      console.log({email: action.payload.email, loggedIn:true, boards: action.payload.boards})
      return {...state, name: action.payload.name, email: action.payload.email, loggedIn:true, boards: action.payload.boards}
    case "REGISTER":
      return {...state, name: action.payload.name, email: action.payload.email}
    case "LOGOUT":
      return initialUserState;
    default:
      return state
  }
}

export default userReducer