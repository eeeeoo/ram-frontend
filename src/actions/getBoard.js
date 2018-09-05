export const getBoard = (boardData) => ({
    type: "GET_BOARD",
    payload: boardData
})

export const fetchUserBoards = () => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then((boardData) => dispatch(getBoard(boardData)))
  }
}

// export default {
//   fetchBoard: (dispatch) => {
//   return dispatch => {
//     fetch('http://localhost:3000/api/v1/users',{
//       method:'GET',
//       headers:{
//         'Content-Type':'application/json',
//         'Authorization': `Bearer ${localStorage.getItem("token")}`
//       }
//     })
//     .then(res => res.json())
//     .then((boardData) => {
//       dispatch(getBoard(boardData))
//     })
//   }
// }
// }