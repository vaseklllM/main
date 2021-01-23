import "../styles/globals.css"
import "antd/dist/antd.css" /** стили Ant Design */

import { applyMiddleware, createStore } from "redux"
import rootReducer from "../store/reducers"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const store = createStore(rootReducer, applyMiddleware(thunk))

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
