export const saveBoard = (boardData) => ({
  type: "SAVE_BOARD",
  payload: boardData
})

export const patchEditedBoard = (title, content, user_id) => {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/boards', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        title, content, user_id
      })
    })
      .then(res => res.json())
      .then((boardData) => dispatch(saveBoard(boardData)))
  }
}

