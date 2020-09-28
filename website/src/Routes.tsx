import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Groups from './pages/Groups/Groups'
import Home from './pages/Home/Home'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/groups">
          <Groups />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export { Routes }
