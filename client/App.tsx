import { StatusBar } from "expo-status-bar"
import React from "react"
import Routes from "./components/Routes"
import store from "./redux/store"
import { Provider } from "react-redux"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      {/* <StatusBar style='auto' /> */}
    </Provider>
  )
}

export default App
