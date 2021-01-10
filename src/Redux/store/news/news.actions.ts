import { newsInterface } from "./../../InterfacesEntity/news.interface"
import { Action } from "../../interfacesAction/action.interface"

export const ActionTypes = {
  GET_NEWS: "[News] Get news",
  SET_NEWS_IN_STORE: "[News] Set news in store",
  SET_COUNT_NEWS_ID: "[News] Set count news id",

  TOGGLE_MODAL_NEWS: "[News] Toggle modal news",
  SET_CHOSEN_ITEM: "[News] Set chosen item",
  REMOVE_ITEM_BY_ID: "[News] Set item by id",

  EDIT_NEWS_BY_ID: "[News] Edit news by id",
  ADD_NEWS_IN_CATALOG: "[News] Add news in catalog",

  SET_CURRENT_FILTER_NEWS: "[News] Set current filter news",
  SET_EMPTY_FILTER_NEWS: "[News] Set empty filter news",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getNews = (currentDate: Date): Action<Date> => ({
  type: ActionTypes.GET_NEWS,
  payload: currentDate,
})

export const setNewsInStore = (
  arrayNews: newsInterface
): Action<newsInterface> => ({
  type: ActionTypes.SET_NEWS_IN_STORE,
  payload: arrayNews,
})

export const setCountNewsID = (amount: number): Action<number> => ({
  type: ActionTypes.SET_COUNT_NEWS_ID,
  payload: amount,
})

export const toggleModalNews = (status: string | null): Action<any> => ({
  type: ActionTypes.TOGGLE_MODAL_NEWS,
  payload: status,
})

export const setChosenItem = (id: number): Action<number> => ({
  type: ActionTypes.SET_CHOSEN_ITEM,
  payload: id,
})

export const removeItemByID = (id: number): Action<number> => ({
  type: ActionTypes.REMOVE_ITEM_BY_ID,
  payload: id,
})

export const editNewsByID = (
  itemNews: newsInterface
): Action<newsInterface> => ({
  type: ActionTypes.EDIT_NEWS_BY_ID,
  payload: itemNews,
})

export const addNewsInCatalog = (itemNews: newsInterface): Action<any> => ({
  type: ActionTypes.ADD_NEWS_IN_CATALOG,
  payload: itemNews,
})

export const setCurrentFilterNews = (value: string): Action<string> => ({
  type: ActionTypes.SET_CURRENT_FILTER_NEWS,
  payload: value,
})

export const setEmptyFilterNews = (): Action<any> => ({
  type: ActionTypes.SET_EMPTY_FILTER_NEWS,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
