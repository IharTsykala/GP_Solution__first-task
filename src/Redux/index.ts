import { combineReducers } from "redux"

import { photoReducer } from "./store/photo/photo.reducer"


export default combineReducers({

  photo: photoReducer,

})
