export function userLogin(userData){
  return {
    type: "LOGIN",
    payload: userData
  }
}

export function fetchUserLogin(email, password){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })
    .then(res => res.json())
    .then((userData) => {
      localStorage.setItem('token', userData.access_token)
      dispatch(userLogin(userData.email, userData.password))
    })
  }
}
