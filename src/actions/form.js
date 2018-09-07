let imageId = 0

export const addImageForm = (photoSrc=null) => {
  return {
    type: "ADD_IMAGE_FORM",
    payload: {id: ++imageId, src:photoSrc, position: {x:12,y:200}, editing:true ,imgWidth:null, imgHeight:null }
  }       
}

export const dragForm = (id, position) => ({
  type: "DRAG_FORM",
  payload: {id:parseInt(id, 10), position: position}
})

export const addImageSrc = (src, id) => ({
  type: "ADD_IMAGE_SRC",
  payload: {src, id},
})

// export const getImageSrc = (src) => {
//   return dispatch => {
//     new Promise(function(resolve, reject){
//       var img = new Image()
//       img.onload = function(){ resolve(this) }
//       img.onerror = function(){ reject(url) }
//       img.src = url
//     })
//     .then(imgData => {
      
//     })
//   }
// }
