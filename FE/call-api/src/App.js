import React, { Component } from 'react'
import Menu from './components/Menu/Menu'
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row display-flex">
              
              {this.showContentMenu(routes)}
            </div>
          </div>
        </div ></Router>

    )
  }
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch>{result}</Switch>
  }
}
