export const addBoard = (boardData) => ({
  type: "ADD_BOARD",
  payload: boardData
})

export const postNewBoard = (title, content, user_id) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/boards', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title, content, user_id
      })
    })
      .then(res => res.json())
      .then((boardData) => dispatch(addBoard(boardData)))
  }
}

