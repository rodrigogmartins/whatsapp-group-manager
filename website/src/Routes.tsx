import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/groups">
          <h3>Groups</h3>
        </Route>
      </Switch>
    </Router>
  )
}

export { Routes }
