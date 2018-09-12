let txtId = 0

export const addTextForm = () => {
  return {
    type: "ADD_TEXT_FORM",
    payload: {id: ++txtId}
  }       
}

export const addTextContent = (content, id) => {
  return {
    type: "ADD_TEXT_CONTENT",
    payload: {content, id}
  }       
}