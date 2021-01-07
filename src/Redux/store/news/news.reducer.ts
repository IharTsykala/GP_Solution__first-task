import { newsInterface } from './../../InterfacesEntity/news.interface';
import { ActionTypes } from "./news.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {  
  catalogNews: [newsInterface];
  countNewsID: number
}

const initialState: State = {  
  catalogNews: [{} as newsInterface],
  countNewsID: 0,
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
  case ActionTypes.SET_COUNT_NEWS_ID:
    return {
      ...state,
      countNewsID: action.payload
    }
  default:
    return state
  }
}
