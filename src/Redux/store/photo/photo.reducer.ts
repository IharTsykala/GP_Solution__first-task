import { photoInterface } from "../../InterfacesEntity/photo.interface"
import { ActionTypes } from "./photo.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  currentPhoto: photoInterface | null;
  stateModal: boolean;
}

const initialState: State = {
  currentPhoto: null,
  stateModal: false,
}
export const photoReducer = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
  case ActionTypes.SET_CURRENT_PHOTO:
    return {
      ...state,
      currentPhoto: action.payload,
    }
  case ActionTypes.SET_STATE_MODAL_WINDOW:
    return {
      ...state,
      stateModal: action.payload,
    }
  default:
    return state
  }
}
