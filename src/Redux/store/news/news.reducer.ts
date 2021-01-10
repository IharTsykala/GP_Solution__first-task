import { newsInterface } from './../../InterfacesEntity/news.interface';
import { ActionTypes } from "./news.actions"
import { Action } from "../../interfacesAction/action.interface"

export interface State {  
  catalogNews: [newsInterface];
  countNewsID: number;
  modalNewsToggle: string | null;
  chosenNews: newsInterface  
}

const initialState: State = {    
  catalogNews: [{} as newsInterface],
  countNewsID: 0,
  modalNewsToggle: null,
  chosenNews: {} as newsInterface,
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
  case ActionTypes.TOGGLE_MODAL_NEWS:       
    return {
      ...state,
      modalNewsToggle: action.payload
    }
  case ActionTypes.SET_CHOSEN_ITEM:
    const chosenItem = state.catalogNews.find(item=>item.id === action.payload)
    return {
      ...state,
      chosenNews: chosenItem || {} as newsInterface
    }
  case ActionTypes.REMOVE_ITEM_BY_ID:    
    return {
      ...state,
      catalogNews: state.catalogNews.filter(item => item.id !== action.payload)
    }  
  case ActionTypes.EDIT_NEWS_BY_ID:
    const indexNews =
      state.catalogNews.findIndex(item=>item.id === action.payload.id)    
    return {
      ...state,
      catalogNews: [...state.catalogNews.slice(0, indexNews),
        action.payload, ...state.catalogNews.slice(indexNews+1)]
    }
  case ActionTypes.ADD_NEWS_IN_CATALOG:      
    return {
      ...state,
      catalogNews:  [action.payload, ...state.catalogNews]
    }  
  default:   
    return state
  }
}
