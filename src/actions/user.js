export const setCurrentUser = userData => ({
  type: "SET_CURRENT_USER",
  payload: userData
})

export const fetchUserLogin = (email, password) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(res => res.json())
    .then((userData) => {
      localStorage.setItem('token', userData.access_token)
      dispatch(setCurrentUser(userData))
    })
  }
}

export const fetchCurrentUser = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then((userData) => dispatch(setCurrentUser(userData)))
  }
}

export function userRegister(userData){
  return {
    type: "REGISTER",
    payload: userData
  }
}

export function fetchNewUser(name, email, password){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        name, email, password
      })
    })
    .then(res => res.json())
    .then(userData => dispatch(userRegister(userData)))
  }
}
