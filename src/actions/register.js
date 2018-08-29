export function userRegister(userData){
  return {
    type: "REGISTER",
    payload: userData
  }
}

export function fetchNewUser(name, email, password){
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/register', {
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
