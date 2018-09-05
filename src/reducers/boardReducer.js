const initialBoardState = {
  boards: null,
  activeBoard: null,
  title:null,
  content:null,
  user_id:null
}

function boardReducer(state = initialBoardState, action){
  switch(action.type){
    case "ADD_BOARD":
      return {...state, activeBoard: action.payload.activeBoard, title: action.payload.title, content: null, user_id:action.payload.user_id}
    case "SAVE_BOARD":
      return {...state, activeBoard: action.payload.activeBoard, title: action.payload.title, content: action.payload.content, user_id:action.payload.user_id}
    default:
      return state
  }

}

export default boardReducer