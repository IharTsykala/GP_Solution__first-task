import React from "react"
import "./App.scss"
import NewsPage from "./Pages/NewsPage/NewsPage"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"
import newsSaga from "./Redux/store/news/news.sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(newsSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper1600"}>
      <div className={"wrapper1440"}>
        <main className={"main"}>
          <NewsPage />
        </main>
      </div>
    </div>
  </Provider>
)

export default App
