import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserView from './UserView'
import ReportView from './ReportView'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserView}></Route>
        <Route path="/report/:reportId?" exact component={ReportView}></Route>
      </Switch>
    </Router>
  )
}
