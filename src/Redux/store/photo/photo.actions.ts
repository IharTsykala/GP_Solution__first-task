import { Action } from "../../interfacesAction/action.interface"
import { photoInterface } from "../../InterfacesEntity/photo.interface"

export const ActionTypes = {
  SET_LIST_WORKS_PHOTOS: "[PHOTO] Set list works photos",
  SET_LIST_TEAM_PHOTOS: "[PHOTO] Set list team photos",
  SET_CURRENT_PHOTO: "[PHOTO] Set current photo",

  SET_STATE_MODAL_WINDOW: "[Modal] Set state for modal",
}

export const setListWorksPhotos = (
  arrayPhotos: photoInterface[]
): Action<photoInterface[]> => ({
  type: ActionTypes.SET_LIST_WORKS_PHOTOS,
  payload: arrayPhotos,
})

export const setListTeamPhotos = (
  arrayPhotos: photoInterface[]
): Action<photoInterface[]> => ({
  type: ActionTypes.SET_LIST_TEAM_PHOTOS,
  payload: arrayPhotos,
})

export const setCurrentPhoto = (
  currentPhoto: photoInterface
): Action<photoInterface> => ({
  type: ActionTypes.SET_CURRENT_PHOTO,
  payload: currentPhoto,
})

export const setStateModalWindow = (stateModal: boolean): Action<boolean> => ({
  type: ActionTypes.SET_STATE_MODAL_WINDOW,
  payload: stateModal,
})
