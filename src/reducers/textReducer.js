const initialTextState = {
  txtForms: [],
}

function textReducer(state = initialTextState, action){
  switch(action.type){
    case "ADD_TEXT_FORM":
      return {...state, txtForms: [...state.txtForms, action.payload]}
    case "ADD_TEXT_CONTENT":
      let ogState = [...state.txtForms]
      let index = ogState.findIndex(txtForm => txtForm.id === action.payload.id);
      let txtForm = ogState[index + 1]
      let newState = {...state, txtForms: state.txtForms.map(
        (txtForm, i) => i === index ? {...txtForm, content: action.payload.content}: txtForm
      )}
      debugger;
      return newState
    default:
      return state
  }
}

export default textReducer
