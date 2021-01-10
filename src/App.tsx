import React from "react"
import "./App.scss"
import NewsPage from "./Pages/NewsPage/NewsPage"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"
import newsSaga from "./Redux/store/news/news.sagas"
import { AppBar, Box } from "@material-ui/core"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import ModalWindow from "./Components/ModalWindow/ModalWindow"

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
    <ScopedCssBaseline>
      <Box component="div" className={"wrapper"}>
        <ModalWindow />
        <AppBar className={"header"}>{"Header"}</AppBar>
        <Box component="div" className={"main"}>
          <NewsPage />
        </Box>
      </Box>
    </ScopedCssBaseline>
  </Provider>
)

export default App
