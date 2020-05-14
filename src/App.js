import React from "react"
import "./App.scss"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { scaleRotate as Menu } from "react-burger-menu"
import { Administrator } from './pages/Administrator';
import { FirebaseState } from "./context/firebase/FirebaseState"

function App() {
  return (
    <BrowserRouter>
      <FirebaseState>
        <div id="App">
          <div id="outer-container">
            <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
              <Navigation />
            </Menu>
            <main id="page-wrap">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/admin" component={Administrator} />
              </Switch>
            </main>
          </div>
        </div>
      </FirebaseState>
    </BrowserRouter>
  )
}

export default App
