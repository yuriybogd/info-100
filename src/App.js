import React, { useContext, useEffect } from "react"
import "./App.scss"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { scaleRotate as Menu } from "react-burger-menu"
import { Administrator } from "./pages/Administrator"
import { FirebaseState } from "./context/firebase/FirebaseState"
import { Auth } from "./pages/Auth"
import { AuthContext } from "./context/authentification/authContext"
import { Logout } from "./components/Logout"

function App() {
  const { autoLogin, token } = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      autoLogin()
    }
  }, [])

  const renderRoutes = (userToken) => {
    if (userToken) {
      return (
        <>
          <Route path="/search" component={Search} />
          <Route path="/admin" component={Administrator} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </>
      )
    } else {
      return (
        <>
          <Route path="/search" component={Search} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </>
      )
    }
  }

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
              {renderRoutes(token)}
              </Switch>
            </main>
          </div>
        </div>
      </FirebaseState>
    </BrowserRouter>
  )
}

export default App
