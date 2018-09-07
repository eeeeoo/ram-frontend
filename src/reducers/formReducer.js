const initialFormState = {
  title: null,
  txtForms: [],
  imgForms: [],
  shapeForms: []
}

function formReducer(state = initialFormState, action){
  switch(action.type){
    case "ADD_IMAGE_FORM":
    debugger;
      return {...state, imgForms: [...state.imgForms, {imgForm:action.payload}]}
    // case "DRAG_FORM":
    // console.log('working')
    //   let findForm = state.imgForms.find(imgForm => imgForm.imgForm.id === action.payload.id);
    //   // const {x,y} = position
    //   findForm.position.x = action.payload.position.x
    //   findForm.position.y = action.payload.position.y
    //   return {...state, imgForms: [...state.imgForms, {imgForm:{...state.imgForm, position: action.payload} }]}
    case "ADD_IMAGE_SRC":
    
      let ogState = [...state.imgForms]
      let findForm = ogState.find(imgForm => imgForm.imgForm.id === action.payload.id);
      findForm.src = action.payload.src
      let newState = {...state, imgForms: [...state.imgForms]}
        // {imgForm:{...imgForm, src: action.payload.src} }]}
      console.log(newState)
      debugger;
      return newState
      // return {...state, imgForms: [action.payload.]}
    default:
      return state
  }
}

export default formReducer
