import { newsInterface } from "./../../InterfacesEntity/news.interface"
import { Action } from "../../interfacesAction/action.interface"
import { newsInterface } from "../../InterfacesEntity/news.interface"

export const ActionTypes = {
  GET_NEWS: "[News] Get news",
  SET_NEWS_IN_STORE: "[News] Set news in store",
  SET_COUNT_NEWS_ID: "[News] Set count news id",

  TOGGLE_MODAL_NEWS: "[News] Toggle modal news",
  SET_CHOSEN_ITEM: "[News] set chosen item",
  REMOVE_ITEM_BY_ID: "[News] set item by id",

  EDIT_NEWS_BY_ID: "[News] Edit news by id",
  ADD_NEWS_IN_CATALOG: "[News] Add news in catalog",

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

export const toggleModalNews = () => ({
  type: ActionTypes.TOGGLE_MODAL_NEWS,
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

export const addNewsInCatalog = (
  itemNews: newsInterface
): Action<newsInterface> => ({
  type: ActionTypes.ADD_NEWS_IN_CATALOG,
  payload: itemNews,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
