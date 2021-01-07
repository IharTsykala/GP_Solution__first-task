import React from "react"
import "./App.scss"
import MainPage from "./Pages/MainPage/MainPage"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./Redux/index"

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(applyMiddleware())
)

const App: React.FC = () => (
  <Provider store={store}>
    <div className={"wrapper1600"}>
      <div className={"wrapper1440"}>       
        <main className={"main"}>
          <MainPage />
        </main>      
      </div>
    </div>
  </Provider>
)

export default App
