import { newsInterface } from './../../InterfacesEntity/news.interface';
import { ActionTypes } from "./news.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {  
  catalogNews: [newsInterface];
}

const initialState: State = {  
  catalogNews: [{} as newsInterface],
}

export const newsReducer = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) { 
  case ActionTypes.SET_NEWS_IN_STORE:
    return {
      ...state,
      catalogNews: action.payload
    }
  default:
    return state
  }
}
